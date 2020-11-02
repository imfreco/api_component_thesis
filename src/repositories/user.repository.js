const BaseRepository = require('./base.repository');
let _user = null,
  _role = null;

class UserRepository extends BaseRepository {
  constructor({ db }) {
    _user = db['User'];
    _role = db['Role'];
    super(_user);
  }

  async getRolesByUser(userId) {
    return await _role.findAll({
      attributes: ['name'],
      include: {
        attributes: [],
        model: _user,
        where: { id: userId },
      },
    });
  }
}

module.exports = UserRepository;
