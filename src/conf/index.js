
const restify = require('restify')
const server = restify.createServer()
const pokeroutes = require('../http/pokeroutes')
const routes = require('../http/routes')
const cors = require('cors')

const options = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}

server.use(cors(options))
server.use(restify.plugins.bodyParser())

routes(server)
pokeroutes(server)

module.exports = server
