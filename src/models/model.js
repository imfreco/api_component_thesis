const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Method, {
        through: 'Scope',
        foreignKey: 'methodId',
      });
    }
  }
  Model.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Model',
    }
  );
  return Model;
};
