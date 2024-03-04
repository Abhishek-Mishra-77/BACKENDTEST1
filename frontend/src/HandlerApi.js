import axiox from 'axios'

const createTable = async (columnNames, columnTypes, tableName) => {
    const response = await axiox.post('http://localhost:5000/', { columnNames, columnTypes, tableName })
    console.log(response)
}


export { createTable }