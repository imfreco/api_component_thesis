const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sisben extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.UserInscriptions, {
        foreignKey: 'sisbenId',
      });
    }
  }
  Sisben.init(
    {
      value: {
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
      modelName: 'Sisben',
    }
  );
  return Sisben;
};
