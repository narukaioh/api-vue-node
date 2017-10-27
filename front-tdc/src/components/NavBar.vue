<template lang="pug">
    .row
        .col-lg-3
            router-link(to="/add", class='btn btn-success') Adicionar Pokemon
        .col-lg-9
            .input-group
                input(class='form-control', id='appendedDropdownButton', type='text', placeholder='Buscar pokemon...')
                span.input-group-btn
                    button(class='btn btn-default')
                        span(class="glyphicon glyphicon-search")
</template>

<script>

export default {
    data() {
        return {

        }
    }
}

</script>