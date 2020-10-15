let _inscriptionService = null;

class InscriptionController {
  constructor({ InscriptionService }) {
    _inscriptionService = InscriptionService;
  }

  async getAll(req, res) {
    const inscriptions = await _inscriptionService.getAll();
    return res.send(inscriptions);
  }

  async getByUserId(req, res) {
    const { userId } = req.params;
    const inscriptions = await _inscriptionService.getByUserId(userId);
    return res.send(inscriptions);
  }

  async create(req, res) {
    const { body } = req;
    const inscription = await _inscriptionService.create(body);
    return res.status(201).send(inscription);
  }

  async patchAdmit(req, res) {
    const { inscriptionId } = req.params;
    const { body } = req;
    const inscription = await _inscriptionService.update(inscriptionId, body);
    return res.send(inscription);
  }
}

module.exports = InscriptionController;
