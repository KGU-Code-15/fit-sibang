const mongoose = require('mongoose')

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

const User = mongoose.model('User', userSchema)

module.exports = { User }
