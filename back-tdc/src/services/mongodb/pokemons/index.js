
const pokemons = require('./pokemons')

const pokemon = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { errorHandler } = deps
        pokemons.find({}, (err, results) => {
          if (err) {
            errorHandler(err, 'Falha ao listar os pokemons', reject)
          }
          resolve({ pokemons: results })
        })
      })
    },
    save: (pokemon) => {},
    update: (id, pokemon) => {},
    del: (id) => {}
  }
}

module.exports = pokemon
