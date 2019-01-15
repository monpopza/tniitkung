<template>
    <div>
        <b-card :title="`${{name}}`"
                :img-src="`${{pic}}`"
                img-top
                tag="article"
                class="mb-2">
            <p class="card-text">
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Section'
    }
</script>

<style scoped>

</style>
