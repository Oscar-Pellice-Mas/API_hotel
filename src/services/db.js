// connect to DB
const Sequelize = require("sequelize");

module.exports = {
    db: new Sequelize(
        process.env.DB_DATABASE_NAME || "",
        process.env.DB_USER || "",
        process.env.DB_PASSWORD,
        {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          dialect: "mysql",
          protocol: "mysql",
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
          pool: {
            max: 5,
            min: 0,
            idle: 10000,
          },
          logging: false,
        }
    ),
} 