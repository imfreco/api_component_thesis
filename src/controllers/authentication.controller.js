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
    const id_token = req.headers['Authorization'];
    return res.send({ id_token });
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
