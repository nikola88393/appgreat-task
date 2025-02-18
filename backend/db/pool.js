const {Pool} = require('pg')

module.exports = new Pool({
    database: 'postgre',
    host: 'localhost',
    user: 'postgre',
    password: "test123"
})
