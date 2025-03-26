const path = require('path')
const request = require('supertest')
const pool = require('../../db/pool')
const app = require('../../server')()
const { UserRepo } = require('../../repos/user.repo')
const Context = require('../context')

let context

beforeAll(async () => {
  context = await Context.build()
})

beforeEach(async () => {
  await context.reset()
})

afterAll(() => {
  return context.close()
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
