<template lang="pug">
  .row
    .col-lg-12
      .bs-component
        h1.title Adicionar Pokemon
        .form-group
          label.control-label Nome
          input(class="form-control", v-model="pokemon.name", type="text")
        .form-group
          label.control-label Tipo
          input(class="form-control", v-model="pokemon.type", type="text")
        .btn-toolbar(role='toolbar')
            .btn-group
              router-link(to="/", class="btn btn-success")
                span(class="glyphicon glyphicon-chevron-left") 
                | Voltar para tela anterior
            .btn-group
              button(@click="edit(pokemon)", class="btn btn-primary") Editar
</template>

<script>

import { addPokemon, editPokemon, getPokemon } from '../services/pokemons'

export default {
  data() {
    return {
      pokemon: {
        name: '',
        type: ''
      }
    }
  },
  mounted () {
    getPokemon(this.$route.params.id).then(res => this.pokemon = res.pokemon)
  },
  methods: {
    edit (pokemon) {
      const id = this.$route.params.id
      editPokemon(id, pokemon).then(res => {
        console.log(res)
      })
    }
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
}

</style>