// const conf = {};
// require("dotenv").config()

// conf.environment = 'development';
// conf.sequelize = {};
// conf.sequelize.username = process.env.DB_USERNAMENAME;
// conf.sequelize.password = process.env.DB_PASSWORD;
// conf.sequelize.database = process.env.DB_NAME;
// conf.sequelize.host = process.env.DB_HOST;
// conf.sequelize.dialect = 'mysql';
// conf.sequelize.port = process.env.DB_PORT;
// conf.sequelize.define = {
//     charset: 'utf8mb4',
//     dialectOptions: {
//         collate: 'utf8mb4_unicode_ci'
//     }
// }
// conf.ROUND_SALT = 8;
// module.exports = conf;

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
