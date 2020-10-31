const BaseRepository = require('./base.repository');
let _user = null,
  _credential = null;

class AuthenticationRepository extends BaseRepository {
  constructor({ db }) {
    _user = db['User'];
    _credential = db['Credential'];
    super(_user);
  }

  async getCredentialsByEmail(email) {
    return await _credential.findOne({
      attributes: ['lengthpass', 'hashpass', 'userId'],
      where: { email },
    });
  }
}

module.exports = AuthenticationRepository;
