const request = require('supertest')
const { options } = require('../../')
const pool = require('../../db/pool')
const app = require('../../server')()
const { UserRepo } = require('../../repos/user.repo')

beforeAll(() => pool.connect(options))
afterAll(() => {
  pool.close()
})

it('create a user', async () => {
  const startingCount = await UserRepo.count()

  expect(Number(startingCount)).toEqual(0)

  await await request(app)
    .post('/users')
    .send({
      username: 'testuser',
      bio: 'test bio',
    })
    .expect(200)

  const finishCount = await UserRepo.count()

  expect(Number(finishCount)).toEqual(1)
})
