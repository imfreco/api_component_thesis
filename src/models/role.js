const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        through: models.UserRoles,
        foreignKey: 'roleId',
      });
      this.belongsToMany(models.Scope, {
        through: models.RoleScopes,
        foreignKey: 'roleId',
      });
    }
  }
  Role.init(
    {
      name: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        unique: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );
  return Role;
};
