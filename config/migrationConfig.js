const config = require('./index');
const cfg = {};
cfg[conf.environment] = config.sequelize;
module.exports = cfg;
