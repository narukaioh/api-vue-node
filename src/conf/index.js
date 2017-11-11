
const restify = require('restify')
const server = restify.createServer()
const pokeroutes = require('../http/pokeroutes')
const routes = require('../http/routes')
const cors = require('cors')

server.use(cors())
server.use(restify.fullResponse())
server.use(restify.plugins.bodyParser())

routes(server)
pokeroutes(server)

module.exports = server
