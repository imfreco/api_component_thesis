const BaseService = require('./base.service');
let _componentRepository = null;

class ComponentService extends BaseService {
  constructor({ ComponentRepository }) {
    super(ComponentRepository);
    _componentRepository = ComponentRepository;
  }
}

module.exports = ComponentService;
