const pg = require('pg')
require('dotenv').config()

const config = {
  host: 'localhost',
  port: 5432,
  database: 'socialnetwork',
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
}

exports.pool = new pg.Pool(config)
