const BaseService = require('./base.service');
let _inscriptionRepository = null;
const generateErrorHelper = require('../helpers/generate.error.helper');

class InscriptionService extends BaseService {
  constructor({ InscriptionRepository }) {
    super(InscriptionRepository);
    _inscriptionRepository = InscriptionRepository;
  }

  async getByUserId(userId) {
    if (!userId) generateErrorHelper(400, 'userId must be sent');

    return await _inscriptionRepository.getByUserId(userId);
  }
}

module.exports = InscriptionService;
