const express = require('express')
const router = express.Router()
const sequelize = require('../models/Table')

const createDynamicTableModel = require('../models/Table')


router.post('/', async (req, res) => {
    try {
        const { columnNames, columnTypes, tableName } = req.body
        const DynamicTable = createDynamicTableModel(tableName)
        console.log(DynamicTable)
        const columDefinitions = {};
        for (let i = 0; i < columnNames.length; i++) {
            columDefinitions[columnNames[i]] = {
                type: columnTypes[i],
                allowNull: false
            }
        }

        DynamicTable.init(columDefinitions, {
            sequelize,
            modelName: tableName
        })

        await DynamicTable.sync({ force: true })

        res.status(201).json({ message: 'Table created successfully' })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})


module.exports = router;