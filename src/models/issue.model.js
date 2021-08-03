const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    static associate(models) {
      Issue.belongsTo(models.hotel, {
        foreignKey: 'id_hotel',
        as: 'hotel',
      });
      Issue.belongsTo(models.user, {
        foreignKey: 'id_reporter',
        as: 'reporter',
      });
    }    
  }
	Issue.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      id_reporter: {
        type: DataTypes.STRING,
      },
      id_hotel: {
        type: DataTypes.STRING,
      },
      room: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subcategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "issue",
      modelName: "issue",
    }
  );
	return Issue;
}