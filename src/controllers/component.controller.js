let _componentService = null;

class ComponentController {
  constructor({ ComponentService }) {
    _componentService = ComponentService;
  }

  async getAll(req, res) {
    const components = await _componentService.getAll();
    return res.send(components);
  }

  async create(req, res) {
    const { body } = req;
    const component = await _componentService.create(body);
    return res.status(201).send(component);
  }
}

module.exports = ComponentController;
