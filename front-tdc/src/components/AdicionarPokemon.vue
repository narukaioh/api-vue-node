<template lang="pug">
  el-form(ref='form', label-width='200px')
    el-form-item(label='Nome')
      el-input(v-model='form.name')
    el-form-item(label='Tiṕo')
      el-input(v-model='form.type')      
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