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

  if (!users.length) return res.json({ message: 'No users found' })

  // send the result back to the user
  return res.json(users)
})

/**
 * Fetch a user with a particular ID
 * @method GET
 * @route /users/:id
 */
userRouter.get('/:id', async (req, res) => {
  const { id } = req.params

  const user = await UserRepo.findById(id)

  if (!user.length) return res.status(404).json({ message: 'No user found' })

  return res.json(user)
})

/**
 * Create a new user
 * @method POST
 * @route /users
 */
userRouter.post('/', async (req, res) => {
  const { bio, username } = req.body

  if (!username.trim())
    return res.status(400).json({
      message: 'Username required',
    })

  const newUser = await UserRepo.insert(username, bio)

  return res.json(newUser)
})

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
