import Vue from 'vue'
import VueRouter from 'vue-router'
import './assets/css/bootstrap.min.css'
import App from './App.vue'

import List from './components/List.vue'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'

const routes = [
  { path: '/', component: List },
  { path: '/add', component: Add },
  { path: '/edit/:id', component: Edit }
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
