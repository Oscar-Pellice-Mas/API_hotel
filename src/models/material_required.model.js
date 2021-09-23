'use strict';
const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
    class MatRequeried extends Model{
        static associate(models){
            MatRequeried.belongsTo(models.issue, {
                foreignKey: 'id_issue',
                as: 'issue',
            });
            MatRequeried.belongsTo(models.material, {
                foreignKey: 'id_material',
                as: 'material',
            });
        }
    }
    MatRequeried.init(
        {
            id_issue: {
                type: DataTypes.STRING,
                primaryKey: true,
                unique: false
            },
            id_material: {
                type: DataTypes.STRING,
                primaryKey: true,
                unique: false
            },
            quantity: {
              type: DataTypes.INTEGER,
              allowNull: false,
            }
        },
        {
            sequelize: sequelize,
            timestamps: false,
            tableName: "material_required",
            modelName: "material_required",
        }
    );
    return MatRequeried;
}