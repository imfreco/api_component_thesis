const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scope extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Role, {
        through: models.RoleScopes,
        foreignKey: 'scopeId',
      });
      this.belongsTo(models.Method);
      this.belongsTo(models.Module);
    }
  }
  Scope.init(
    {
      moduleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      methodId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      fullAccess: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Scope',
    }
  );
  return Scope;
};
