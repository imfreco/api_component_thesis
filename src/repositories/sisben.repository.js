const BaseRepository = require('./base.repository');
let _sisben = null;

class SisbenRepository extends BaseRepository {
  constructor({ db }) {
    _sisben = db['Sisben'];
    super(_sisben);
  }
}

module.exports = SisbenRepository;
