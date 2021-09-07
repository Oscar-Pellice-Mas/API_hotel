'use strict';
const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Average extends Model {
        static associate(models){
            Average.belongsTo(models.hotel, {
                foreignKey: 'id_hotel',
                as: 'hotel'
            });
            Average.belongsTo(models.material, {
                foreignKey: 'id_material',
                as: 'material'
            });
        }
    }
    Average.init(
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            id_hotel:{
                type: DataTypes.STRING,
            },
            id_material:{
                type: DataTypes.STRING
            },
            price:{
                type: DataTypes.FLOAT
            },
            quantity:{
                type: DataTypes.INTEGER
            },
            created_at:{
                type: DataTypes.DATE
            }
        },
        {
            sequelize: sequelize,
            timestamps: false,
            tableName: "average",
            modelName: "average",
        }
    );
    return Average;
}