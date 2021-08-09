'use strict';
const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {}
	Hotel.init({
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: sequelize,
      timestamps: false,
      tableName: "hotel",
      modelName: "hotel",
    });
	return Hotel;
}