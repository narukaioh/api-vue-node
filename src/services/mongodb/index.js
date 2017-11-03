const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const connection = mongoose.createConnection(process.env.MONGODB_URI, { useMongoClient: true })

connection.then(function(db){
  console.log(db)
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ message: msg })
}

const pokemon = require('./pokemon')({ errorHandler })

module.exports = {
  pokemons: () => pokemon
}
