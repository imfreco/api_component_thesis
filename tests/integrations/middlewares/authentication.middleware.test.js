const container = require('../../../src/startup/container');
const db = container.resolve('db');
const server = container.resolve('server');
const app = server.getApp();
const request = require('supertest');

const { decode } = require('jsonwebtoken');
const { replacePassword } = require('../../helpers/dictionary.helpers');

describe('Pruebas de integración en el middleware de autenticación', () => {
  const baseUrl = '/v1/api';

  test('CP13 - Debería responder satisfactoriamente con envío del token de identificación', async () => {
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
      .get(`${baseUrl}/inscription`)
      .set('Authorization', res2.body.id_token);

    expect(res3.statusCode).toBe(200);
    expect(res3.body).toEqual(expect.any(Array));
  });

  test('CP14 - Debería responder con falta de autorización sin el envío del token de identificación', async () => {
    const res1 = await request(app).get(`${baseUrl}/inscription`);

    expect(res1.statusCode).toBe(401);
    expect(res1.body).toEqual({
      status: 401,
      message: expect.any(String),
    });
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
