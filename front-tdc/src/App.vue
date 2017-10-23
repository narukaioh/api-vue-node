<template lang="pug">
  div
    el-menu(theme='default', class='el-menu-demo', mode='horizontal')
      el-menu-item(index='1'): router-link(to='add') Adicionar Pokemon
      el-menu-item(index='2')
        el-input(placeholder='Buscar por Pokemon', icon='search')
    router-view
</template>

<script>
export default {
  name: 'PokeDex',
  data () {
    return {
      search: '',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
