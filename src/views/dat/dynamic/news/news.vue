<template>
    <b-card-group deck>
        <b-card
            v-for="(newsd, index) in newsID"
            :key="`news_${index}`"
            :title="newsd.name"
            :sub-title="newsd.date"
            :img-src="newsd.pic"
            img-top
            style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
            tag="article"
            class="mb-2"
            border-variant="dark"
        >
            <footer>
                <b-button :to="`/news/${newsd.key}`" variant="dark">อ่านต่อ...</b-button>
            </footer>
        </b-card>
    </b-card-group>
</template>

<script>
    import Firebase from '@/Firebase'

    export default {
        name: 'news',
        data () {
            return {
                newsID: []
            }
        },
        created () {
            let arr = []

            Firebase.firestore().collection('data').doc('news').collection('news').get().then(list => {
                list.forEach(doc => arr.push({
                    ...doc.data(),
                    key: doc.id
                }))
            })

            this.newsID = arr
        }
    }
</script>

<style scoped>

</style>
