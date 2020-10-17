const BaseService = require('./base.service');
let _menuRepository = null;
const generateErrorHelper = require('../helpers/generate.error.helper');

class MenuService extends BaseService {
  constructor({ MenuRepository }) {
    super(MenuRepository);
    _menuRepository = MenuRepository;
  }

  async createMenuWithDetails(body) {
    const { date, menuDetails } = body;

    return await _menuRepository.createMenuWithDetails({ date }, menuDetails);
  }
}

module.exports = MenuService;
