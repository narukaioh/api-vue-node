const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: [
    '*',
    'http://surge.sh',
    'http://*.surge.sh',
    /^https?:\/\/surge.sh(:[\d]+)?$/
  ],
  allowHeaders: ['*'],
  exposeHeaders: ['*']
})

module.exports = cors
