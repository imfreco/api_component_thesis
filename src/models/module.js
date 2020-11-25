const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /* this.belongsToMany(models.Method, {
        through: models.Scope,
        foreignKey: 'moduleId',
      }); */
      this.hasMany(models.Scope, {
        foreignKey: 'moduleId',
      });
    }
  }
  Module.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Module',
    }
  );
  return Module;
};
