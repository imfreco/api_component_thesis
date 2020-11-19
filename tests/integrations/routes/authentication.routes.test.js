const container = require('../../../src/startup/container');
const db = container.resolve('db');
const server = container.resolve('server');
const app = server.getApp();
const request = require('supertest');

const { decode } = require('jsonwebtoken');
const { replacePassword } = require('../../helpers/dictionary.helpers');

describe('Pruebas de integración en el módulo de autenticación', () => {
  const baseUrl = '/v1/api';

  test('CP07 - Debería responder con un token de identificación y actualización nuevos cuando se autentica inicialmente y silenciosamente', async () => {
    const res1 = await request(app).get(`${baseUrl}/auth/substitution`);
    const { dict_token } = res1.body;
    const { dictionary } = decode(dict_token);
    const email = 'frcortes@education.co';
    const passwordOriginal = 'FRED20';
    const password = replacePassword(dictionary, passwordOriginal);

    const res2 = await request(app)
      .post(`${baseUrl}/auth/signin`)
      .send({ email, password, dict_token });

    const res3 = await request(app)
      .get(`${baseUrl}/auth/refresh`)
      .set('Authorization', res2.body.refresh_token);

    expect(res2.statusCode).toBe(200);
    expect(res2.body).toEqual({
      id_token: expect.any(String),
      refresh_token: expect.any(String),
    });
    expect(res3.statusCode).toBe(200);
    expect(res3.body).toEqual({
      id_token: expect.any(String),
      refresh_token: expect.any(String),
    });
  });

  test('CP09 - Debería responder con un jwt con el diccionario de sustitución con la estructura correcta', async () => {
    const res = await request(app).get(`${baseUrl}/auth/substitution`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      dict_token: expect.any(String),
    });
    expect(decode(res.body.dict_token)).toEqual({
      dictionary: expect.any(Object),
      iat: expect.any(Number),
      exp: expect.any(Number),
    });
  });

  test('CP10 - Debería responder con jwts que contengan diccionarios diferentes para dos solicitudes continuas', async () => {
    const res1 = await request(app).get(`${baseUrl}/auth/substitution`);
    const res2 = await request(app).get(`${baseUrl}/auth/substitution`);

    const deco1 = decode(res1.body.dict_token);
    const deco2 = decode(res2.body.dict_token);

    expect(deco1.dictionary).not.toEqual(deco2.dictionary);
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
