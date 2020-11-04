const generateErrorHelper = require('../helpers/generate.error.helper');

let _authenticationService = null;

class AuthenticationController {
  constructor({ AuthenticationService }) {
    _authenticationService = AuthenticationService;
  }

  async getSubstitutionDictionary(req, res) {
    const token = await _authenticationService.getSubstitutionDictionary();
    return res.send({ token });
  }

  async getRefreshToken(req, res) {
    const refresh_token = req.headers['authorization'];
    if (!refresh_token) generateErrorHelper(400, 'refresh token must be sent');

    const token = await _authenticationService.getRefreshToken(refresh_token);
    return res.send(token);
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
