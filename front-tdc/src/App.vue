<template lang="pug">
  .container
    router-view
</template>

<script>

export default {
  name: 'PokeDex',
  data () {
    return {
      search: ''
    }
  }
}
</script>
