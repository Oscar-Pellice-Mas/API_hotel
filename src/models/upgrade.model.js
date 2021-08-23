'use strict';
const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Upgrade extends Model {
        static associate(models){
            Upgrade.belongsTo(models.hotel, {
                foreignKey: 'id_hotel',
                as: 'hotel',
            });
            Upgrade.belongsTo(models.user, {
                foreignKey: 'id_reporter',
                as: 'reporter',
            });
        }
    }
    Upgrade.init(
        {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            id_hotel: {
                type: DataTypes.STRING,
            },
            id_reporter: {
                type: DataTypes.STRING,
            },
            title: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            room: {
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
            status: {
              type: DataTypes.INTEGER,
              allowNull: false,
            },
            date: {
              type: DataTypes.DATE,
              allowNull: false,
            }
        },
        {
            sequelize: sequelize,
            timestamps: false,
            tableName: "upgrade",
            modelName: "upgrade",
        }
    );
    return Upgrade;
}