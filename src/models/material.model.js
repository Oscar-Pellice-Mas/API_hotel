'use strict';
const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Material extends Model {      
      static associate(models) {
        Material.belongsTo(models.hotel, {
            foreignKey: { name: 'id_hotel' },
            targetKey: 'id',
        });
      }
    }
    Material.init({
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          price: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          average: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
        },
        {
          sequelize: sequelize,
          timestamps: false,
          tableName: "material",
          modelName: "material",            
        });
    return Material;
}