<template lang="pug">
  .row
    .col-lg-12
      form.bs-component
        h1.title Listagem de Pokemons
        NavBar
        table.table.table-striped.table-hover
          tbody
            tr
              td #
              td Pikachu
              td Eletrico
              td: router-link.btn-block.btn.btn-primary(to='/add') Editar
              td: button.btn-block.btn.btn-danger Excluir
          thead
            tr
              th #
              th Nome
              th Tipo
              th Editar
              th Excluir
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  data() {
    return {
        pokemons: []
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