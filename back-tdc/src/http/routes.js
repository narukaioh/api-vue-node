
const categorias = require('../services/mysql')

const routes = (server) => {

  server.get('categoria', (req, res, next) => {
    res.send('teste')
    next()
  })

  server.post('categoria', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })


  server.get('/', (req, res, next) => {
    res.send('enjoy the silence!')
    next()
  })

//   server.put('categoria', (req, res, next) => {
//     res.send()
//     next()
//   })
//   server.del('categoria', (req, res, next) => {
//     res.send()
//     next()
//   })
}

module.exports = routes
