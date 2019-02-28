<template>
    <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2">
        <template slot="header" style="font-size: small">
            We are sorry,
        </template>
        <template slot="lead">
            <p>The page you requested cannot be found or the page you're looking for is no longer available.</p>
            <b-progress :value="value" :max="max" class="mb-3"/>
            <p>We will redirect to Homepage</p>
        </template>
    </b-jumbotron>
</template>
<!--Countdown to Redirect-->
<script>
    export default {
        name: 'notfound',
        data () {
            return {
                max: 2,
                value: 3
            }
        },
        created () {
            this.countdown()
        },
        methods: {
            countdown () {
                this.value = this.value - 1;
                if (this.value < 0) {
                    // Chnage your redirection link here
                    this.$router.push('/home')
                } else {
                    // Count down using javascript
                    window.setTimeout(this.countdown, 1000);
                }
            }
        }
    }
</script>

<style scoped>

</style>
