const BaseRepository = require('./base.repository');
let _user = null,
  _role = null,
  _scope = null,
  _method = null,
  _module = null;

class UserRepository extends BaseRepository {
  constructor({ db }) {
    _user = db['User'];
    _role = db['Role'];
    _scope = db['Scope'];
    _method = db['Method'];
    _module = db['Module'];
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

  async getScopesByUser(userId, method, module, fullAccess) {
    return _scope.findAll({
      attributes: ['id'],
      include: [
        {
          attributes: [],
          model: _role,
          include: {
            attributes: [],
            model: _user,
            where: { id: userId },
          },
        },
        {
          attributes: [],
          model: _method,
          where: { name: method },
        },
        {
          attributes: [],
          model: _module,
          where: { name: module },
        },
      ],
      where: { fullAccess },
    });
  }
}

module.exports = UserRepository;
