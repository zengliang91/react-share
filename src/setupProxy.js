const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/base', { 
    target: 'http://dev.resource.share.jxstjh.com/base',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/base": "/"
    },
   }))
}