const express = require('express')
const app = express()
const port = 5000

// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// cookie-parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())

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

// auth
const { auth } = require('./middleware/auth')

// route
// get method
app.get('/', (req, res) => res.send('Hello World!zz'))

app.get('/user/auth', auth, (req, res) => {
  req.status(200).json({
    _id: req.user._id,
    userName: req.user.userName,
  })
})

app.get('/user/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    {
      token: '',
    },
    (err, user) => {
      if (err) return res.json({ success: false, err })
      return res.status(200).send({
        success: true,
      })
    }
  )
})

//post method
app.post('/user/register', (req, res) => {
  const user = new User(req.body) // body-parser를 이용해 request를 json형식으로 받음
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true,
    })
  })
})
app.post('/user/login', (req, res) => {
  User.findOne({ userName: req.body.userName }, (err, user) => {
    if (!user) {
      return res.json({ success: false, message: '아이디가 없습니다.' })
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.',
        })
      }
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err)
        res.cookie('x_auth', user.token).status(200).json({
          success: true,
          userId: user._id,
        })
      })
    })
  })
})

app.listen(port, () => console.log(`로컬호스트 연결 http://localhost:${port}/`))
