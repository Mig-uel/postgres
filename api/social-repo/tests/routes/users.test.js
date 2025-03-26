const request = require('supertest')
const app = require('../../server')()
const { UserRepo } = require('../../repos/user.repo')

it('create a user', async () => {
  const startingCount = await UserRepo.count()

  expect(startingCount).toEqual(0)

  await await request(app)
    .post('/users')
    .send({
      username: 'testuser',
      bio: 'test bio',
    })
    .expect(200)

  const finishCount = await UserRepo.count()

  expect(finishCount).toEqual(1)
})
