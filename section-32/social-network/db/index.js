const path = require('path')
const pg = require('pg')
require('dotenv').config({
  path: path.join(__dirname, '..', '.env'),
})

const config = {
  host: 'localhost',
  port: process.env.PORT,
  database: 'socialnetwork',
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
}

exports.pool = new pg.Pool(config)
