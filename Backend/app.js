const express = require('express')
const cors = require('cors')
require('dotenv').config()
const sequelize = require('./utils/db')
const PORT = process.env.PORT || 8000
const app = express()

const table = require('./routes/table')

app.use(express.json())
app.use(cors())

app.use('/', table)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});


app.listen(PORT, () => {
    console.log('Application Start')
})
