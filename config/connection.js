const { verify } = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize("postgresql://cyrus:Eternal1@localhost:5432/postgres");
    module.exports = sequelize