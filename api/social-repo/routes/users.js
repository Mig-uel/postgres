const userRouter = require('express').Router()
const { UserRepo } = require('../repos/user.repo')

/**
 * Fetch all users from the users table
 * @method GET
 * @route /users
 */
userRouter.get('/', async (req, res) => {
  // run a query to get all users
  const users = await UserRepo.find()

  if (!users) return res.json({ message: 'No users found!' })

  // send the result back to the user
  return res.json(users)
})

/**
 * Fetch a user with a particular ID
 * @method GET
 * @route /users/:id
 */
userRouter.get('/:id', async (req, res) => {})

/**
 * Create a new user
 * @method POST
 * @route /users
 */
userRouter.post('/', async (req, res) => {})

/**
 * Update a user with a particular ID
 * @method PUT
 * @route /users/:id
 */
userRouter.put('/:id', async (req, res) => {})

/**
 * Delete a user with a particular ID
 * @method DELETE
 * @route /users/:id
 */
userRouter.delete('/:id', async (req, res) => {})

module.exports = {
  userRouter,
}
