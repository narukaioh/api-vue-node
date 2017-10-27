<template lang="pug">
  .row
    .col-lg-12
      form.bs-component
        h1.title Adicionar Pokemon
        .form-group
          label.control-label Nome
          input(class="form-control", type="text")
        .form-group
          label.control-label Tipo
          input(class="form-control", type="text")
        .btn-toolbar(role='toolbar')
            .btn-group
              router-link(to="/", class="btn btn-success")
                span(class="glyphicon glyphicon-chevron-left") 
                | Voltar para tela anterior
            .btn-group
              button(type="submit", class="btn btn-primary") Salvar
</template>

<script>

export default {
  data() {
    return {
      form: {
        name: '',
        type: ''
      }
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