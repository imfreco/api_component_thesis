let _sisbenService = null;

class SisbenController {
  constructor({ SisbenService }) {
    _sisbenService = SisbenService;
  }

  async getAll(req, res) {
    const sisbens = await _sisbenService.getAll();
    return res.send(sisbens);
  }
}

module.exports = SisbenController;
