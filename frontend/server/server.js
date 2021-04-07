const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const userRouter = require('./api/users/user_router')
const port = 3002

app.use(express.json())
app.use('/api/users', userRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))
