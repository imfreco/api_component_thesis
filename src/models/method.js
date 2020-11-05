const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Model, {
        through: 'Scope',
        foreignKey: 'modelId',
      });
    }
  }
  Method.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Method',
    }
  );
  return Method;
};
