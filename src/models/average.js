const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Average extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Inscription, {
        foreignKey: 'averageId',
      });
    }
  }
  Average.init(
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
      modelName: 'Average',
    }
  );
  return Average;
};
