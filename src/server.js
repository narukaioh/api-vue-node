
require('dotenv').config()

const server = require('./conf')
const port = process.env.PORT || 8080;

server.listen(port)
