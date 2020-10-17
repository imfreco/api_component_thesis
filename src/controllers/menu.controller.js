let _menuService = null;

class MenuController {
  constructor({ MenuService }) {
    _menuService = MenuService;
  }

  async createMenuWithDetails(req, res) {
    const { body } = req;
    const menu = await _menuService.createMenuWithDetails(body);
    return res.status(201).send(menu);
  }
}

module.exports = MenuController;
