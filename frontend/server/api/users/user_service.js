const pool = require('../../config/database')

module.exports = {
  create: (data, callBack) => {
    pool.query(
      'insert into User (userId, password) values(?,?)',
      [data.userId, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error)
        }
        return callBack(null, results)
      }
    )
  },

  getUsers: callBack => {
    pool.query(`select * from User`, (error, results, fields) => {
      if (error) {
        return callBack(error)
      }
      return callBack(null, results)
    })
  },
  getUserByUserID: (id, callBack) => {
    pool.query(
      `select * from User where userId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error)
        }
        return callBack(null, results)
      }
    )
  },
}
