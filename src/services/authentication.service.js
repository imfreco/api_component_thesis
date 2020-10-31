const { verify } = require('jsonwebtoken');
const { compareSync } = require('bcrypt');

const BaseService = require('./base.service');
let _authenticationRepository = null;

const { JWT_SECRET } = require('../config');
const {
  generateCombinationsHelper,
  generateErrorHelper,
} = require('../helpers');

class AuthenticationService extends BaseService {
  constructor({ AuthenticationRepository }) {
    super(AuthenticationRepository);
    _authenticationRepository = AuthenticationRepository;
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

    const combinations = generateCombinationsHelper(
      password,
      payload.dictionary
    );

    let match = false;
    for (let i = 0; i < combinations.length; i++) {
      const combination = combinations[i];
      if (compareSync(combination, creds.hashpass)) {
        match = true;
        break;
      }
    }

    if (!match) generateErrorHelper(400, 'Credenciales incorrectas');

    // return await _authenticationRepository.getUserById(creds.userId);
    return true;
  }
}

module.exports = AuthenticationService;
