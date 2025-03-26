const path = require('path')
const { randomBytes } = require('crypto')
const request = require('supertest')
const pool = require('../../db/pool')
const app = require('../../server')()
const { UserRepo } = require('../../repos/user.repo')
const format = require('pg-format')
const { default: migrate } = require('node-pg-migrate')
require('dotenv').config({
  path: path.resolve(__dirname, '../../.env'),
})

beforeAll(async () => {
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
    `
      CREATE ROLE ${roleName} WITH LOGIN PASSWORD '${roleName}';
    `
  )

  // create a schema with the same name
  await pool.query(
    `
      CREATE SCHEMA ${roleName} AUTHORIZATION ${roleName};
    `
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

  return await pool.connect({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: 'socialnetwork-test',
    user: roleName,
    password: roleName,
  })
})
afterAll(() => {
  pool.close()
})

it('create a user', async () => {
  const startingCount = await UserRepo.count()

  await await request(app)
    .post('/users')
    .send({
      username: 'testuser',
      bio: 'test bio',
    })
    .expect(200)

  const finishCount = await UserRepo.count()

  expect(Number(finishCount - startingCount)).toEqual(1)
})
