<template>
    <b-list-group style="margin:3rem 0; ">
        <b-list-group-item v-for="i in 10" to="/#">
            {{ `List ${i}` }}
        </b-list-group-item>
    </b-list-group>
</template>

<script>
    export default {
        name: 'listing'
    }
</script>

<style scoped>

</style>
