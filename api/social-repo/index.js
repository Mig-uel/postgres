const path = require('path')
const app = require('./server')()
const pool = require('./db/pool')
require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
})

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}

pool
  .connect(options)
  .then(() => {
    console.log('----- CONNECTED TO PG -----')
    app.listen(3005, () => {
      console.log('----- NODE SERVER RUNNING -----')
    })
  })
  .catch((error) => console.log(error))

module.exports = {
  options,
}
