const { verify } = require('jsonwebtoken');

const BaseService = require('./base.service');
let _authenticationRepository = null,
  _userService = null;

const { JWT_SECRET } = require('../config');
const {
  compareCombinationsHelper,
  generateErrorHelper,
} = require('../helpers');
const generateJwtHelper = require('../helpers/generate.jwt.helper');

class AuthenticationService extends BaseService {
  constructor({ AuthenticationRepository, UserService }) {
    super(AuthenticationRepository);
    _authenticationRepository = AuthenticationRepository;
    _userService = UserService;
  }

  async signIn(email, password, dict_token) {
    const creds = await _authenticationRepository.getCredentialsByEmail(email);

    if (!creds) generateErrorHelper(400, 'Correo electrónico no existe');

    if (isNaN(password))
      generateErrorHelper(400, 'Está intentando acceder de forma sospechosa');

    if (creds.lengthpass != password.length)
      generateErrorHelper(400, 'La longitud de su contraseña es incorrecta');

    const payload = verify(dict_token, JWT_SECRET);
    if (!payload)
      generateErrorHelper(400, 'El diccionario de sustitución caducó');

    let match = compareCombinationsHelper(
      password,
      payload.dictionary,
      creds.hashpass
    );

    if (!match) generateErrorHelper(400, 'Credenciales incorrectas');

    const { id, name, lastname } = await _userService.get(creds.userId);
    let roles = await _userService.getRolesByUser(id);
    roles = roles.map((role) => role.name);

    const id_token = generateJwtHelper(
      { sub: id, name, lastname, roles },
      { expiresIn: 60 * 5 }
    );

    return { id_token };
  }
}

module.exports = AuthenticationService;
