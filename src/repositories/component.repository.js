const BaseRepository = require('./base.repository');
let _component = null;

class ComponentRepository extends BaseRepository {
  constructor({ db }) {
    _component = db['Component'];
    super(_component);
  }
}

module.exports = ComponentRepository;
