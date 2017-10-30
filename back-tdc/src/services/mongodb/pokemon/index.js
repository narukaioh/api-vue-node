
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
    getPokemon: (id) => {
      return new Promise((resolve, reject) => {
        const { errorHandler } = deps
        Pokemon.findOne({ _id: id }, (err, result) => {
          if (err) {
            errorHandler(err, `Falha ao listar o pokemon de id ${id}`, reject)
          }
          resolve({ pokemon: result })
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
          resolve({ status: true, pokemon: results, message: 'O pokemon foi inserido com sucesso!' })
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
          resolve({ status: true, message: 'O pokemon foi removido com sucesso!' })
        })
      })
    },
    update: (id, pokemon) => {
      console.log(id, pokemon)
      return new Promise((resolve, reject) => {
        const { errorHandler } = deps
        Pokemon.findByIdAndUpdate(id, pokemon, (err, pokemon) => {
          if (err) {
            errorHandler(err, `Falha ao atualizar o pokemon de id: ${id}`, reject)
          }
          resolve({ status: true, message: 'O pokemon foi atualizado com sucesso!' })
        })
      })
    }
  }
}

module.exports = db
