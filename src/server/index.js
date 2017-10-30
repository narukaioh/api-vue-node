
const restify = require('restify')
const server = restify.createServer()
const pokeroutes = require('../http/pokeroutes')
const routes = require('../http/routes')
const cors = require('./cors')

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())

routes(server)
pokeroutes(server)

module.exports = server
