const {
  generateSubstitutionDictionaryHelper,
  generateJwtHelper,
} = require('../helpers');

let _authenticationService = null;

class AuthenticationController {
  constructor({ AuthenticationService }) {
    _authenticationService = AuthenticationService;
  }

  async getSubstitutionDictionary(req, res) {
    let dictionary = generateSubstitutionDictionaryHelper();
    const token = generateJwtHelper(
      { dictionary },
      { algorithm: 'HS256', expiresIn: 60 * 5 }
    );
    return res.send({ token });
  }
}

module.exports = AuthenticationController;
