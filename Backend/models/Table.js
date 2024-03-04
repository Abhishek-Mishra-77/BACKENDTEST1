const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

function createDynamicTableModel(tableName) {
    const DynamicTable = sequelize.define(tableName, {
        columnName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return DynamicTable;
}

module.exports = createDynamicTableModel;
