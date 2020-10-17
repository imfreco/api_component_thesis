const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MenuDetails.init(
    {
      menuId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      componentId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      value: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'MenuDetails',
    }
  );
  return MenuDetails;
};
