const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'backendtest1',
    'root',
    process.env.PASSWORD,
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)


module.exports = sequelize;