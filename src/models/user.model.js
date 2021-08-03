import { Sequelize, Model, DataTypes, GeometryDataType } from "sequelize";
import { sequelize } from "../../database/dbConnection";
import { Hotel, Issue } from './index';

class User extends Model {}

User.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: sequelize,
      tableName: "user",
      modelName: "user",
    }
);

User.belongsTo(Hotel, {
    foreignKey: { name: 'id_hotel' },
    targetKey: 'id',
})

Hotel.hasMany(Issue, {
    foreignKey: 'id_reporter',
    targetKey: 'id',
  });
  