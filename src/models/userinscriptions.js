const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Sisben);
      this.belongsTo(models.Average);
      this.belongsTo(models.Population);
    }
  }
  UserInscriptions.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sisbenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      averageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      populationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'UserInscriptions',
    }
  );
  return UserInscriptions;
};
