const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ message: msg })
}

const pokemon = require('./pokemon')({ errorHandler })

module.exports = {
  pokemons: () => pokemon
}
