<template>
    <b-card-group v-if="about">
        <b-card :title="about.name"
                :sub-title="about.date"
                :img-src="about.pic"
                img-top
                class="mb-2"
        >
            <b-card-text v-html="about.header" v-if="about.header"/><br>
            <b-img v-if="about.bimg" v-for="(item, idx) in about.bimg" :key="`pic_${idx}`" :src="item"/><br>
            <b-card-text v-if="about.footer" v-html="about.footer"/><br>
            <b-embed v-if="about.iframe"
                     type="iframe"
                     aspect="16by9"
                     :src="about.iframe"
            />
        </b-card>
    </b-card-group>
</template>

<script>
    import Firebase from '@/Firebase'

    export default {
        name: 'detail',
        data () {
            return {
                about: null
            }
        },
        computed: {
            descriptions () {
                if (!this.about) return []
                return this.about.des.split('<br>')
            }
        },
        created () {
            Firebase.firestore().collection('data').doc('news').collection('news').doc(this.$route.params.newsID).collection('detail').doc('detail').get().then(doc => {
                this.about = doc.data()
            })
        }
    }
</script>

<style scoped>

</style>
