import Vue from 'vue'
import VueRouter from 'vue-router'
import './assets/css/bootstrap.min.css'
import App from './App.vue'

import ListarPokemons from './components/ListarPokemons.vue'
import AdicionarPokemon from './components/AdicionarPokemon.vue'

const routes = [
  { path: '/', component: ListarPokemons },
  { path: '/add', component: AdicionarPokemon }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
