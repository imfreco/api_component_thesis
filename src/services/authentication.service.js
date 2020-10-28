const BaseService = require('./base.service');
let _authenticationRepository = null;

class AuthenticationService extends BaseService {
  constructor({ AuthenticationRepository }) {
    super(AuthenticationRepository);
    _authenticationRepository = AuthenticationRepository;
  }
}

module.exports = AuthenticationService;
