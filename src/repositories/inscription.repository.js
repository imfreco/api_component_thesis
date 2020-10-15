const BaseRepository = require('./base.repository');
let _inscription = null;

class InscriptionRepository extends BaseRepository {
  constructor({ db }) {
    _inscription = db['Inscription'];
    super(_inscription);
  }

  async getByUserId(userId) {
    return await _inscription.findAll({
      attributes: ['id', 'createdAt', 'state'],
      where: {
        userId,
      },
    });
  }
}

module.exports = InscriptionRepository;
