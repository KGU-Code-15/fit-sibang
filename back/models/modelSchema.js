const mongoose = require('mongoose')
const bcrypt = require('bcrypt') // 암호화
const saltRounds = 10

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    maxlength: 50,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 10,
    required: true,
  },
  address: {
    type: String,
    maxlength: 50,
    default: '',
  },
  age: {
    type: Number,
    default: 0,
  },
  height: {
    type: Number,
    default: 0.0,
  },
  weight: {
    type: Number,
    default: 0.0,
  },
  gender: {
    type: Boolean, // true: 남 false : 여
    default: true,
  },
  tokenExp: {
    type: Number,
  },
})

// save함수의 전처리
userSchema.pre('save', function (next) {
  var user = this
  if (user.isModified('password')) {
    // 비밀번호 변경시의 암호화
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
      })
    })
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
