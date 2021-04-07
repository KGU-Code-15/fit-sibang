const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    '/api/users/',
    createProxyMiddleware({
      target: 'http://localhost:3002/',
      changeOrigin: true,
    })
  )
}
