const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoleScopes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RoleScopes.init(
    {
      roleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      scopeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'RoleScopes',
    }
  );
  return RoleScopes;
};
