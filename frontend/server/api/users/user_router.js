const {
  createUser,
  getUserByUserID,
  getUsers,
  login,
} = require('./user_controller')

const router = require('express').Router()
const { checkToken } = require('../../auth/token_validation')

router.post('/register', createUser)
router.post('/login', login)

module.exports = router
