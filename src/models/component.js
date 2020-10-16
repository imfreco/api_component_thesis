const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Component extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Menu, {
        through: 'MenuDetails',
        foreignKey: 'menuId',
      });
    }
  }
  Component.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Component',
    }
  );
  return Component;
};
