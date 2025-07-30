require("dotenv").config();

const Sequelize = require("sequelize");

if (process.env.DB_PASSWORD === "ChangeMe!") {
  console.error("Please update the .env file with your database password.");
  process.exit(1);
}

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_DATABASE,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306',
      }
    );

module.exports = sequelize;
