import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

import AdicionarPokemon from './components/AdicionarPokemon.vue'

const routes = [
  { path: '/add', component: AdicionarPokemon }
]

const router = new VueRouter({
  routes
})

Vue.use(ElementUI)
Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
