const BaseRepository = require('./base.repository');
let _user = null,
  _credential = null,
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
    _credential = db['Credential'];
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
    // TODO: corregir
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

  async updateLastRefreshToken(userId, refresh_token) {
    return await _credential.update(
      { lastRT: refresh_token },
      {
        where: { userId },
        fields: ['lastRT'],
      }
    );
  }

  async getCredentials(userId) {
    return await _credential.findOne({
      attributes: ['lastRT'],
      where: { userId },
    });
  }

  async getCredentialsByEmail(email) {
    return await _credential.findOne({
      attributes: ['lengthpass', 'hashpass', 'userId'],
      where: { email },
    });
  }
}

module.exports = UserRepository;
