<template>
    <div>
        <b-form-textarea id="textarea1"
                         v-model="text"
                         placeholder="Enter Some Feedback"
                         :rows="4"
                         :max-rows="6"
        />
        <pre class="mt-4">{{ text }}</pre>
    </div>
</template>

<script>
    export default {
        name: 'Feedback',
        data() {
            return {
                text: ''
            }
        }
    }
</script>

<style scoped>

</style>
