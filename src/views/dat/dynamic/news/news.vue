<template>
    <b-card-group v-if="newsID" desk>
        <b-card
            :title="`newsID.title`"
            :img-src="`newsID.img`"
            :img-alt="`newsID['img-alt']`"
            img-top
            style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
            :tag="`newsID['img-alt']`"
            class="mb-2"
            border-variant="dark"
        >
            <footer>
                <b-button :to="`/exchange/${$route.params.newsID}`" variant="outline-dark">อ่านต่อ</b-button>
            </footer>
        </b-card>
    </b-card-group>
</template>

<script>
    export default {
        name: 'news',
        data () {
            return {
                newsID: null
            }
        },
        created () {
            firebase.firestore().collection('collection').document(this.$route.params.newsID).get().then(doc => {
                this.newsID = doc.data()
            })
        }
    }
</script>

<style scoped>

</style>
