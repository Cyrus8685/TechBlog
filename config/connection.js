const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize({
  username: process.env.USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
});
    module.exports = sequelize