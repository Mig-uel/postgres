const path = require('path')
const { randomBytes } = require('crypto')
const pool = require('../db/pool')
const format = require('pg-format')
const { default: migrate } = require('node-pg-migrate')
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
})

class Context {
  #_roleName

  static async build() {
    // randomly generate a role name to connect to PG as
    const roleName = 't' + randomBytes(4).toString('hex')

    // connect to PG as usual
    await pool.connect({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: 'socialnetwork-test',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    })

    // create a new role
    await pool.query(
      format('CREATE ROLE %I WITH LOGIN PASSWORD %L', roleName, roleName)
    )

    // create a schema with the same name
    await pool.query(
      format('CREATE SCHEMA %I AUTHORIZATION %I', roleName, roleName)
    )

    // disconnect entirely from PG
    await pool.close()

    // run migration in the new schema
    await migrate({
      databaseUrl: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: 'socialnetwork-test',
        user: roleName,
        password: roleName,
      },
      dir: 'migrations',
      direction: 'up',
      log: () => {},
      noLock: true,
      schema: roleName,
    })

    // connect to pg a the newly created role

    await pool.connect({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: 'socialnetwork-test',
      user: roleName,
      password: roleName,
    })

    return new Context(roleName)
  }

  constructor(roleName) {
    this.#_roleName = roleName
  }
}

module.exports = Context
