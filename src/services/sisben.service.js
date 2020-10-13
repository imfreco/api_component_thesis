const BaseService = require('./base.service');
let _sisbenRepository = null;

class SisbenService extends BaseService {
  constructor({ SisbenRepository }) {
    super(SisbenRepository);
    _sisbenRepository = SisbenRepository;
  }
}

module.exports = SisbenService;
