const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Population extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.UserInscriptions, {
        foreignKey: 'populationId',
      });
    }
  }
  Population.init(
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
      modelName: 'Population',
    }
  );
  return Population;
};
