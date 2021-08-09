const { Model } = require ("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsTo(models.hotel, {
                foreignKey: { name: 'id_hotel' },
                targetKey: 'id',
            });
        }
    }
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
          timestamps: false,
          tableName: "user",
          modelName: "user",
        }
    );
      return User;
  }