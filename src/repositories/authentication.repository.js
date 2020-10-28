const BaseRepository = require('./base.repository');
let _user = null;

class AuthenticationRepository extends BaseRepository {
  constructor({ db }) {
    _user = db['User'];
    super(_user);
  }
}

module.exports = AuthenticationRepository;
