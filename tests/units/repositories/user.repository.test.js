const container = require('../../../src/startup/container');
const db = container.resolve('db');

const { UserRepository } = require('../../../src/repositories');

describe('Pruebas unitarias de la capa de acceso a datos del usuario', () => {
  const _userRepository = new UserRepository({ db });
  const userId = 1;

  expect.extend({
    nullOrString(received) {
      if (typeof received === 'string' || received === null) {
        return {
          message: () => `expected ${received} is string or null`,
          pass: true,
        };
      } else {
        return {
          message: () => `expected ${received} is not string or null`,
          pass: false,
        };
      }
    },
  });

  test('CP01 - Debería obtener las credenciales de un usuario por email', async () => {
    const credentialsExpected = {
      lengthpass: 6,
      hashpass: expect.any(String),
      userId: 1,
    };
    const email = 'frcortes@education.co';

    const credentialsReceived = await _userRepository.getCredentialsByEmail(
      email
    );

    expect(credentialsReceived.dataValues).toEqual(credentialsExpected);
  });

  test('CP02 - Debería obtener las credenciales de un usuario por userId', async () => {
    const credentialsExpected = {
      lastRT: expect.nullOrString(),
    };

    const credentialsReceived = await _userRepository.getCredentials(userId);

    expect(credentialsReceived.dataValues).toEqual(credentialsExpected);
  });

  test('CP03 - Debería obtener los roles de un usuario por userId', async () => {
    const rolesExpected = [{ name: 'Estudiante' }];

    const rolesReceived = await _userRepository.getRolesByUser(userId);

    expect(rolesReceived.length).toBe(rolesExpected.length);
    expect(rolesReceived[0].dataValues).toEqual(rolesExpected[0]);
  });

  test('CP04 - Debería modificar el último token de actualización emitido', async () => {
    const updateExpected = [1];

    const refresh_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

    const updateReceived = await _userRepository.updateLastRefreshToken(
      userId,
      refresh_token
    );

    expect(updateReceived).toEqual(updateExpected);
  });

  /* test('CP05 - Debería obtener los privilegios de un usuario por userId', async () => {
    // const scopesExpected = { methodId: 1, moduleId: 2, fullAccess: true };

    const method = 'get';
    const module = 'average';
    const fullAccess = true;

    const scopesReceived = await _userRepository.getScopesByUser(
      userId,
      method,
      module,
      fullAccess
    );

    console.log(scopesReceived);
    // expect(scopesReceived).toEqual(scopesExpected);
  }); */

  afterAll(async () => {
    await db.sequelize.close();
  });
});
