require("dotenv").config();
module.exports = {
  development: {
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  production: {
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
