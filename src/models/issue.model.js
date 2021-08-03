import { Sequelize, Model, DataTypes, GeometryDataType } from "sequelize";
import { sequelize } from "../../database/dbConnection";
import { User, Hotel } from './index';

class Issue extends Model {}

Issue.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
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
      sequelize: sequelize,
      tableName: "issue",
      modelName: "issue",
    }
);

Issue.belongsTo(Hotel, {
  foreignKey: { name: 'id_hotel' },
  targetKey: 'id',
})

Issue.belongsTo(User, {
  foreignKey: { name: 'id_reporter' },
  targetKey: 'id',
})