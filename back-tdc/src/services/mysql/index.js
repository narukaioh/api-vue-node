
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  databhase: 'api_tdc'
})

const categorias = connection.query('SELECT * FROM categorias', (error, results) => {
  if (error) {}
  return { categories: results }
})

module.exports = categorias
