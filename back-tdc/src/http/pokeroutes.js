
const db = require('../services/mongodb')

const routes = (server) => {
  server.get('pokemon', async (req, res, next) => {
    try {
      res.json(await db.pokemons().all())
    } catch (error) {
      res.json(error)
    }
    next()
  })

  server.post('pokemon', async (req, res, next) => {
    const pokemon = req.params
    try {
      res.json(await db.pokemons().save(pokemon))
    } catch (error) {
      res.json(error)
    }
    next()
  })

  server.put('pokemon', async (req, res, next) => {
    const pokemon = req.params
    try {
      res.json(await db.pokemons().update(pokemon))
    } catch (error) {
      res.json(error)
    }
    next()
  })

  server.del('pokemon', async (req, res, next) => {
    const { id } = req.params
    try {
      res.json(await db.pokemons().del(id))
    } catch (error) {
      res.json(error)
    }
    next()
  })

  server.get('/', (req, res, next) => {
    res.json('Olá mundo!')
    next()
  })
}

module.exports = routes
