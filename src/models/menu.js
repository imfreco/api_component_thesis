const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Component, {
        through: 'MenuDetails',
        foreignKey: 'componentId',
      });
    }
  }
  Menu.init(
    {
      date: {
        allowNull: false,
        unique: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Menu',
    }
  );
  return Menu;
};
