<template>
    <b-card-group v-if="exchangeID" desk>
        <b-card
            :title="`exchangeID.title`"
            :img-src="`exchangeID.img`"
            :img-alt="`exchangeID['img-alt']`"
            img-top
            style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
            :tag="`exchangeID['img-alt']`"
            class="mb-2"
            border-variant="dark"
        >
            <footer>
                <b-button :to="`/exchange/${$route.params.exchangeID}`" variant="outline-dark">อ่านต่อ</b-button>
            </footer>
        </b-card>
    </b-card-group>
</template>

<script>
    export default {
        name: 'exchange',
        data () {
            return {
                exchangeID: null
            }
        },
        created () {
            firebase.firestore().collection('collection').document(this.$route.params.exchangeID).get().then(doc => {
                this.exchangeID = doc.data()
            })
        }
    }
</script>

<style scoped>

</style>
