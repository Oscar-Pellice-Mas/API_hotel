import { Sequelize, Model, DataTypes, GeometryDataType } from "sequelize";
import { sequelize } from "../../database/dbConnection";
import { Issue, User } from './index';

class Hotel extends Model {}

Hotel.init(
    {
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
      tableName: "hotel",
      modelName: "hotel",
    }
);

Hotel.hasMany(Issue, {
  foreignKey: 'id_hotel',
  targetKey: 'id',
});

Hotel.hasMany(User, {
  foreignKey: 'id_hotel',
  targetKey: 'id',
});