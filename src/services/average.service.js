const BaseService = require('./base.service');
let _averageRepository = null;

class AverageService extends BaseService {
  constructor({ AverageRepository }) {
    super(AverageRepository);
    _averageRepository = AverageRepository;
  }
}

module.exports = AverageService;
