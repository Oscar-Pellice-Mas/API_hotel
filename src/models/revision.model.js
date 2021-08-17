'use strict';
const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Revision extends Model {
        static associate(models){
            Revision.belongsTo(models.hotel, {
                foreignKey: 'id_hotel',
                as: 'hotel',
            });
        }
    }
    Revision.init(
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            id_hotel: {
                type: DataTypes.STRING,
            },
            title: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            description: {
              type: DataTypes.TEXT,
              allowNull: false,
            },
            picture: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            date: {
              type: DataTypes.DATE,
              allowNull: false,
            },
            next: {
              type: DataTypes.DATE,
              allowNull: false,
            }
        },
        {
            sequelize: sequelize,
            timestamps: false,
            tableName: "revision",
            modelName: "revision",
        }
    );
    return Revision;
}