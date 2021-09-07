'use strict';
const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models){
            Comment.belongsTo(models.issue, {
                foreignKey: 'issue_id',
                as: 'issue'
            });
            Comment.belongsTo(models.hotel, {
                foreignKey: 'hotel_id',
                as: 'hotel'
            });
        }
    }
      Comment.init({
        id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          autoIncrement: true,
          primaryKey: true,
        },
        issue_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        hotel_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        comentari: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize: sequelize,
        timestamps: false,
        tableName: "comentari",
        modelName: "comentari",
      });
      return Comment;
  }