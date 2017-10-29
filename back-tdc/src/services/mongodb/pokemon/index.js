
const Pokemon = require('./pokemon')

const db = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { errorHandler } = deps
        Pokemon.find({}, (err, results) => {
          if (err) {
            errorHandler(err, 'Falha ao listar os pokemons', reject)
          }
          resolve({ pokemons: results })
        })
      })
    },
    save: (pokemon) => {
      return new Promise((resolve, reject) => {
        const { errorHandler } = deps
        const pokemons = new Pokemon(pokemon)
        pokemons.save((err, results) => {
          if (err) {
            errorHandler(err, `Falha ao inserir o pokemon ${pokemon.name}`, reject)
          }
          resolve({ pokemon: results })
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { errorHandler } = deps
        Pokemon.remove({ _id: id }, (err) => {
          if (err) {
            errorHandler(err, `Falha ao deletar o pokemon de id: ${id}`, reject)
          }
          resolve({ status: true })
        })
      })
    },
    update: (pokemon) => {
      return new Promise((resolve, reject) => {
        const { errorHandler } = deps
        const { id } = pokemon
        Pokemon.findByIdAndUpdate(id, pokemon, (err, pokemon) => {
          if (err) {
            errorHandler(err, `Falha ao atualizar o pokemon de id: ${id}`, reject)
          }
          resolve({ status: true })
        })
      })
    }
  }
}

module.exports = db
