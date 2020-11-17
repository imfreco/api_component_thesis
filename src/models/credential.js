const { hashSync } = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Credential extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
    }
  }
  Credential.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      lengthpass: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      hashpass: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      lastRT: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Credential',
    }
  );
  return Credential;
};
