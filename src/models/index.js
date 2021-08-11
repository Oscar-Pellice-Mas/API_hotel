// connect to DB
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = {};

let sequelize;
sequelize = new Sequelize(
    process.env["DB_DATABASE_NAME"] || "",
    process.env["DB_USER"] || "",
    process.env["DB_PASSWORD"],
    {
        host: process.env["DB_HOST"],
        port: process.env["DB_PORT"],
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
})

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;