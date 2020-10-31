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

  async signIn(req, res) {
    const { email, password, dict_token } = req.body;
    const token = await _authenticationService.signIn(
      email,
      password,
      dict_token
    );
    return res.send(token);
  }
}

module.exports = AuthenticationController;
