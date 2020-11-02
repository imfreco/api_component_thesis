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
}

module.exports = UserService;
