<template>
    <b-card-group v-if="about">
        <b-card :title="about.name"
                :sub-title="about.date"
                :img-src="about.pic"
                img-top
                class="mb-2"
        >
            <b-img :src="about.img"/>
            <b-card-text v-html="about.des"/>
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
      Firebase.firestore().collection('data').doc('exchange').collection('exchange').doc(this.$route.params.exchangeID).collection('detail').doc('detail').get().then(doc => {
        this.about = doc.data()
      })
    }
  }
</script>

<style scoped>
    img {
        width: 100%;
        margin: auto;
    }
</style>
