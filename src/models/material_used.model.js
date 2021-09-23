'use strict';
const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
    class MatUsed extends Model{
        static associate(models){
            MatUsed.belongsTo(models.issue, {
                foreignKey: 'id_issue',
                as: 'issue',
            });
            MatUsed.belongsTo(models.material, {
                foreignKey: 'id_material',
                as: 'material',
            });
        }
    }
    MatUsed.init(
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
            tableName: "material_used",
            modelName: "material_used",
        }
    );
    return MatUsed;
}