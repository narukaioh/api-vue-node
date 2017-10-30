const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_DATABASE)

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ error: msg })
}

const pokemons = require('./pokemons')

module.exports = {
  pokemons: () => pokemons
}
