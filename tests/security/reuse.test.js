const container = require('../../src/startup/container');
const db = container.resolve('db');
const server = container.resolve('server');
const app = server.getApp();
const request = require('supertest');

const { decode } = require('jsonwebtoken');
const { replacePassword } = require('../helpers/dictionary.helpers');

describe('Pruebas de seguridad en las rutas privadas con la detección de reuso', () => {
  const baseUrl = '/v1/api';

  test('CP22 - Debería detectar el reuso del token por parte del cliente malicioso', async () => {
    const res1 = await request(app).get(`${baseUrl}/auth/substitution`);
    const { dict_token } = res1.body;
    const { dictionary } = decode(dict_token);
    const email = 'frcortes@education.co';
    const passwordOriginal = 'FRED20';
    const password = replacePassword(dictionary, passwordOriginal);

    const res2 = await request(app)
      .post(`${baseUrl}/auth/signin`)
      .send({ email, password, dict_token });

    const { refresh_token: RT1 } = res2.body;
    const leakedRefreshToken = RT1; // simulate leaked RT

    // simulate id_token death time and legitime client request new IT
    console.time('simulateTime');
    for (let i = 0; i < 2000; i++) {
      console.log('');
    }
    console.timeEnd('simulateTime');

    const res3 = await request(app) // simulate silent authentication for legitime client
      .get(`${baseUrl}/auth/refresh`)
      .set('Authorization', RT1);

    const { id_token: IT2, refresh_token: RT2 } = res3.body;
    const { user: id } = decode(IT2);

    expect(res3.statusCode).toBe(200);

    const res4 = await request(app)
      .get(`${baseUrl}/inscription/${id}`)
      .set('Authorization', IT2);

    expect(res4.statusCode).toBe(200);

    const res5 = await request(app) // simulate silent authentication for malicius client
      .get(`${baseUrl}/auth/refresh`)
      .set('Authorization', leakedRefreshToken); // detected reuse and invalid all refresh tokens

    expect(res5.statusCode).toBe(403);

    const res6 = await request(app)
      .get(`${baseUrl}/auth/refresh`)
      .set('Authorization', RT2);

    expect(res6.statusCode).toBe(403); // RT2 too is invalid
  });

  test('CP23 - Debería detectar el reuso del token por parte del cliente legítimo', async () => {
    const res1 = await request(app).get(`${baseUrl}/auth/substitution`);
    const { dict_token } = res1.body;
    const { dictionary } = decode(dict_token);
    const email = 'frcortes@education.co';
    const passwordOriginal = 'FRED20';
    const password = replacePassword(dictionary, passwordOriginal);

    const res2 = await request(app)
      .post(`${baseUrl}/auth/signin`)
      .send({ email, password, dict_token });

    const { refresh_token: RT1 } = res2.body;
    const leakedRefreshToken = RT1; // simulate leaked RT

    // simulate id_token death time and legitime client request new IT
    console.time('simulateTime');
    for (let i = 0; i < 2000; i++) {
      console.log('');
    }
    console.timeEnd('simulateTime');

    const res3 = await request(app) // simulate silent authentication for legitime client
      .get(`${baseUrl}/auth/refresh`)
      .set('Authorization', leakedRefreshToken);

    const { id_token: IT2, refresh_token: leakedRefreshToken2 } = res3.body;
    const { user: id } = decode(IT2);

    expect(res3.statusCode).toBe(200);

    const res4 = await request(app)
      .get(`${baseUrl}/inscription/${id}`)
      .set('Authorization', IT2);

    expect(res4.statusCode).toBe(200);

    const res5 = await request(app) // simulate silent authentication for legitime client
      .get(`${baseUrl}/auth/refresh`)
      .set('Authorization', RT1); // detected reuse and invalid all refresh tokens

    expect(res5.statusCode).toBe(403);

    const res6 = await request(app)
      .get(`${baseUrl}/auth/refresh`)
      .set('Authorization', leakedRefreshToken2);

    expect(res6.statusCode).toBe(403); // leakedRefreshToken2 too is invalid
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
