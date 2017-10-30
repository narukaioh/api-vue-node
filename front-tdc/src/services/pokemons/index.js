import http from '../client'

export const getPokemons = () => {
  return http.get('/pokemon').then(res => res.data)
}

export const getPokemon = id => {
  return http.get(`/pokemon/${id}`).then(res => res.data)
}

export const removePokemon = id => {
  return http.delete(`/pokemon/${id}`).then(res => res.data)
}

export const editPokemon = (id, pokemon) => {
  return http.put(`/pokemon/${id}`, pokemon).then(res => res.data)
}

export const addPokemon = pokemon => {
  return http.post('/pokemon', pokemon).then(res => res.data)
}
