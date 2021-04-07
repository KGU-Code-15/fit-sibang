const { createPool } = require('mysql')
const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'kxkd46',
  database: 'fitsibang',
})

module.exports = pool
