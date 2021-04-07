const { create, getUserByUserID, getUsers } = require('./user_service')
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

module.exports = {
  createUser: (req, res) => {
    const body = req.body
    const salt = genSaltSync(3)
    body.password = hashSync(body.password, salt)
    create(body, (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).json({
          success: false,
          message: 'Database connect error',
        })
      }
      return res.status(200).json({
        success: true,
        data: results,
      })
    })
  },
  getUserByUserID: (req, res) => {
    const id = req.params.userId
    getUserByUserID(id, (err, results) => {
      if (err) {
        console.log(err)
        return
      }
      if (!results) {
        return res.json({
          success: false,
          message: 'Record not Found',
        })
      }
      return res.json({
        success: true,
        data: results,
      })
    })
  },
  getUsers: (req, res) => {
    getUsers((err, results) => {
      if (err) {
        console.log(err)
        return
      }
      return res.json({
        success: true,
        data: results,
      })
    })
  },
  login: (req, res) => {
    const body = req.body
    getUserByUserID(body.userId, (err, results) => {
      if (err) {
        console.log(err)
      }
      if (
        results != null &&
        typeof results == 'object' &&
        !Object.keys(results).length
      ) {
        return res.json({
          success: false,
          message: 'Invalid ID or Password',
        })
      }

      const result = compareSync(body.password, results[0].password)
      if (result) {
        results.password = undefined
        const jsontoken = sign({ result: results }, 'token', {
          expiresIn: '2h',
        })
        res.cookie('x_auth', jsontoken)
        return res.json({
          success: true,
          message: 'login successfully!',
          token: jsontoken,
        })
      } else {
        return res.json({
          success: false,
          message: 'Invalid ID or Password',
        })
      }
    })
  },
}
