const BaseRepository = require('./base.repository');
let _average = null;

class AverageRepository extends BaseRepository {
  constructor({ db }) {
    _average = db['Average'];
    super(_average);
  }
}

module.exports = AverageRepository;
