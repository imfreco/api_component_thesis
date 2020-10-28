const { generateSubstitutionDictionaryHelper } = require('../helpers');

let _authenticationService = null;

class AuthenticationController {
  constructor({ AuthenticationService }) {
    _authenticationService = AuthenticationService;
  }

  async getSubstitutionDictionary(req, res) {
    const substitutionDictionary = generateSubstitutionDictionaryHelper();
    return res.send(substitutionDictionary);
  }
}

module.exports = AuthenticationController;
