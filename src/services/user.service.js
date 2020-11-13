const BaseService = require('./base.service');
let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getRolesByUser(userId) {
    return await _userRepository.getRolesByUser(userId);
  }

  async getScopesByUser(userId, method, module, fullAccess) {
    return await _userRepository.getScopesByUser(
      userId,
      method,
      module,
      fullAccess
    );
  }

  async updateLastRefreshToken(userId, refresh_token) {
    return await _userRepository.updateLastRefreshToken(userId, refresh_token);
  }

  async getCredentials(userId) {
    return await _userRepository.getCredentials(userId);
  }
}

module.exports = UserService;
