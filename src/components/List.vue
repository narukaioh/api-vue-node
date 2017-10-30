<template lang="pug">
  .row
    .col-lg-12
      .bs-component
        h1.title Listagem de Pokemons
        NavBar
        table.table.table-striped.table-hover
          tbody
            tr(v-for='(pokemon, index) in pokemons')
              td #
              td {{ pokemon.name }}
              td {{ pokemon.type }}
              td: router-link(v-bind:to='`/edit/${pokemon._id}`', class="btn-block btn btn-primary") Editar
              td: button(@click="remove(pokemon._id, index)", class="btn-block btn btn-danger") Excluir
          thead
            tr
              th #  
              th Nome
              th Tipo
              th Editar
              th Excluir
</template>

<script>

import { getPokemons, removePokemon } from '../services/pokemons'
import NavBar from './NavBar.vue'

export default {
  data() {
    return {
        pokemons: [],
        message: ''
    }
  },
  mounted () {
    this.list()
  },
  methods: {
    list () {
      getPokemons().then(res =>{ this.pokemons = res.pokemons })
    },
    remove(id, index) {
      removePokemon(id).then(res => {
        if (res.status) {
          this.pokemons.splice(index, 1)
        }
        this.message = res.message
      })
    }
  },
  components: {
      NavBar
  }
}

</script>

<style>
.title {
  text-transform: uppercase;
  color: #23a127;
  font-weight: bold;
  border-bottom: 5px solid;
  padding-bottom: 10px;
  font-size: 20px;
}
.bs-component {
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;
}

</style>