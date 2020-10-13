let _averageService = null;

class AverageController {
  constructor({ AverageService }) {
    _averageService = AverageService;
  }

  async getAll(req, res) {
    const averages = await _averageService.getAll();
    return res.send(averages);
  }
}

module.exports = AverageController;
