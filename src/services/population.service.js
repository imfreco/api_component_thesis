const BaseService = require('./base.service');
let _populationRepository = null;

class PopulationService extends BaseService {
  constructor({ PopulationRepository }) {
    super(PopulationRepository);
    _populationRepository = PopulationRepository;
  }
}

module.exports = PopulationService;
