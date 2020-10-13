const BaseRepository = require('./base.repository');
let _population = null;

class PopulationRepository extends BaseRepository {
  constructor({ db }) {
    _population = db['Population'];
    super(_population);
  }
}

module.exports = PopulationRepository;
