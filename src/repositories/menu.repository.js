const BaseRepository = require('./base.repository');
let _menu = null,
  _menuDetails = null,
  _sequelize = null,
  _Sequelize = null;

class MenuRepository extends BaseRepository {
  constructor({ db }) {
    _menu = db['Menu'];
    _menuDetails = db['MenuDetails'];
    super(_menu);
    _sequelize = db.sequelize;
    _Sequelize = db.Sequelize;
  }

  async createMenuWithDetails(bodyMenu, bodiesMenuDetails) {
    let transaction;
    try {
      transaction = await _sequelize.transaction({
        isolationLevel: _Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE,
      });

      const menuCreated = await _menu.create(bodyMenu, { transaction });

      if (menuCreated) {
        bodiesMenuDetails.map((detail) => {
          detail.menuId = menuCreated.id;
          return detail;
        });

        const menuDetailsCreated = await _menuDetails.bulkCreate(
          bodiesMenuDetails,
          { transaction }
        );

        if (menuDetailsCreated) {
          await transaction.commit();
          return {
            menu: menuCreated,
            menuDetails: menuDetailsCreated,
          };
        } else return menuDetailsCreated;
      } else return menuCreated;
    } catch (error) {
      await transaction.rollback();
      return error;
    }
  }
}

module.exports = MenuRepository;
