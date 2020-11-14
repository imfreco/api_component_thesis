const { verify } = require('jsonwebtoken');

const BaseService = require('./base.service');
let _authenticationRepository = null,
  _userService = null;

const { JWT_SECRET } = require('../config');
const {
  compareCombinationsHelper,
  generateErrorHelper,
  generateJwtHelper,
  generateSubstitutionDictionaryHelper,
} = require('../helpers');
const timesJwtFixture = require('../fixtures/times.jwt.fixture');
// const { hashSync } = require('bcrypt');

class AuthenticationService extends BaseService {
  constructor({ AuthenticationRepository, UserService }) {
    super(AuthenticationRepository);
    _authenticationRepository = AuthenticationRepository;
    _userService = UserService;
  }

  async getSubstitutionDictionary() {
    let dictionary = generateSubstitutionDictionaryHelper();
    return generateJwtHelper(
      { dictionary },
      { expiresIn: timesJwtFixture.dict_token }
    );
  }

  async getRefreshToken(refresh_token) {
    let payload;
    try {
      payload = verify(refresh_token, JWT_SECRET);
    } catch (error) {
      generateErrorHelper(401, 'Token expirado');
    }

    const { id, name, lastname } = await _userService.get(payload.user);
    let roles = await _userService.getRolesByUser(id);
    roles = roles.map((role) => role.name);
    const { lastRT } = await _userService.getCredentials(id);

    // reused detection
    if (lastRT !== refresh_token) {
      await _userService.updateLastRefreshToken(id, null);
      generateErrorHelper(403, 'Token reusado');
    }

    const new_id_token = generateJwtHelper(
      { user: id, name, lastname, roles },
      { expiresIn: timesJwtFixture.id_token }
    );
    const new_refresh_token = generateJwtHelper(
      { user: id },
      { expiresIn: timesJwtFixture.refresh_token }
    );

    await _userService.updateLastRefreshToken(id, new_refresh_token);

    return { id_token: new_id_token, refresh_token: new_refresh_token };
  }

  async signIn(email, password, dict_token) {
    let payload;

    try {
      payload = verify(dict_token, JWT_SECRET);
    } catch (error) {
      generateErrorHelper(400, 'El diccionario de sustitución caducó');
    }

    if (isNaN(password))
      generateErrorHelper(400, 'Está intentando acceder de forma sospechosa');

    const creds = await _authenticationRepository.getCredentialsByEmail(email);

    if (!creds) generateErrorHelper(400, 'Correo electrónico no existe');

    if (creds.lengthpass != password.length)
      generateErrorHelper(400, 'La longitud de su contraseña es incorrecta');

    let isMatched = compareCombinationsHelper(
      password,
      payload.dictionary,
      creds.hashpass
    );

    if (!isMatched) generateErrorHelper(400, 'Credenciales incorrectas');

    const { id, name, lastname } = await _userService.get(creds.userId);
    let roles = await _userService.getRolesByUser(id);
    roles = roles.map((role) => role.name);

    const id_token = generateJwtHelper(
      { user: id, name, lastname, roles },
      { expiresIn: timesJwtFixture.id_token }
    );

    const refresh_token = generateJwtHelper(
      { user: id },
      { expiresIn: timesJwtFixture.refresh_token }
    );

    await _userService.updateLastRefreshToken(id, refresh_token);

    return { id_token, refresh_token };
  }

  async signOut(userId) {
    const [res] = await _userService.updateLastRefreshToken(userId, null);

    if (res === 0) generateErrorHelper(500, 'Algo ha salido mal');

    return { message: 'Sesión cerrada satisfactoriamente' };
  }
}

module.exports = AuthenticationService;
