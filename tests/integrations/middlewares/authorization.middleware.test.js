const container = require('../../../src/startup/container');
const db = container.resolve('db');
const server = container.resolve('server');
const app = server.getApp();
const request = require('supertest');

const { decode } = require('jsonwebtoken');
const { replacePassword } = require('../../helpers/dictionary.helpers');

describe('Pruebas de integración en el middleware de autenticación', () => {
  const baseUrl = '/v1/api';

  test('CP11 - Debería controlar el acceso al endpoint que requiere autorización', async () => {
    const res1 = await request(app).get(`${baseUrl}/auth/substitution`);
    const { dict_token } = res1.body;
    const { dictionary } = decode(dict_token);
    const email = 'frcortes@education.co';
    const passwordOriginal = 'FRED20';
    const password = replacePassword(dictionary, passwordOriginal);

    const res2 = await request(app)
      .post(`${baseUrl}/auth/signin`)
      .send({ email, password, dict_token });

    const { id_token } = res2.body;
    const { user: id } = decode(id_token);

    const res3 = await request(app)
      .get(`${baseUrl}/inscription`)
      .set('Authorization', id_token);

    const res4 = await request(app)
      .get(`${baseUrl}/inscription/${id}`)
      .set('Authorization', id_token);

    // el token de identificación es el único elemento válido en la capa 1 para el acceso al endpoint
    // los privilegios que posee el usuario identificado son la 2 capa para el control de acceso
    expect(res3.statusCode).toBe(401);
    expect(res3.body).toEqual(expect.objectContaining({ status: 401 }));

    expect(res4.statusCode).toBe(200);
    expect(res4.body).toEqual(expect.any(Array));
  });

  afterAll(async () => {
    await db.sequelize.close();
  });
});
