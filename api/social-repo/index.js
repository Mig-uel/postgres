const express = require('express')
const { userRouter } = require('./routes/users')

module.exports = () => {
  const app = express()

  // middleware
  app.use(express.json())

  // routes
  app.use('/users', userRouter)

  return app
}
