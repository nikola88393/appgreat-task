const dotenv = require('dotenv').config()
const {Pool} = require('pg')

console.log(process.env.DB_PASS);
module.exports = new Pool({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})
