const {Pool} = require('pg')

module.exports = new Pool({
    database: 'postgres',
    host: 'localhost',
    user: 'postgres',
    password: "test123"
})
