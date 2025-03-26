const path = require('path')
const request = require('supertest')
const pool = require('../../db/pool')
const app = require('../../server')()
const { UserRepo } = require('../../repos/user.repo')
require('dotenv').config({
  path: path.resolve(__dirname, '../../.env'),
})

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: 'socialnetwork-test',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}

beforeAll(() => pool.connect(options))
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
