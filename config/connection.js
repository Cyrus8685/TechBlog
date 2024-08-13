const { verify } = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize("postgresql://cyrus:IExiEkUQQhV1H4lCgCZF0Y7c6ZeN8ovg@dpg-cqr06f5svqrc73fob4b0-a:5432/techblog_51t7");
    module.exports = sequelize