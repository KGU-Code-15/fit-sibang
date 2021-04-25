const express = require('express')
const app = express()
const port = 5000

// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Mongo DB init
const mongoose = require('mongoose')
const config = require('./config/key')
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('몽고DB 연결됨 ...'))
  .catch(err => console.log(err))

// DB models
const { User } = require('./models/modelSchema')

// route
app.get('/', (req, res) => res.send('Hello World!zz'))

app.post('/register', (req, res) => {
  const user = new User(req.body) // body-parser를 이용해 request를 json형식으로 받음
  console.log(user)
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  }) // mongoDB method
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
