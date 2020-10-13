let _populationService = null;

class PopulationController {
  constructor({ PopulationService }) {
    _populationService = PopulationService;
  }

  async getAll(req, res) {
    const populations = await _populationService.getAll();
    return res.send(populations);
  }
}

module.exports = PopulationController;
