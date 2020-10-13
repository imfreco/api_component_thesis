class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return await this.model.findAll();
  }

  async get(id) {
    return await this.model.findOne({ where: { id } });
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(id, entity) {
    delete entity.createdAt;
    delete entity.updatedAt;
    return await this.model.update(entity, { where: { id } });
  }

  async delete(id) {
    await this.model.destroy({ where: { id } });
    return true;
  }
}

module.exports = BaseRepository;
