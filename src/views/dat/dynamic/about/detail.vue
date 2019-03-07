<template>
    <b-card-group v-if="about">
        <b-card :title="about.name"
                :sub-title="about.date"
                :img-src="about.pic"
                img-top
                class="mb-2"
                bg-variant="light"
                border-variant="dark"
        >
            <br>
            <b-embed type="iframe"
                     aspect="16by9"
                     :src="about.iframe"
            />
            <p style="text-align: center;color:gray;font-style: italic;">{{about.siframe}}</p>
            <br><br>
            <b-card-text v-html="about.des"/>
            <br><br>
            <b-card-text>ลิงค์ที่เกี่ยวข้อง</b-card-text>
            <br><br>
            <b-button :href="about.web" variant="success">Website</b-button>
            <b-button :href="about.facebook" variant="primary">Facebook</b-button>
            <b-button :href="about.youtube" variant="danger">Youtube</b-button>
            <br>
            <br>
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
      Firebase.firestore().collection('data').doc('about').collection('about').doc(this.$route.params.aboutID).collection('detail').doc('detail').get().then(doc => {
        this.about = doc.data()
      })
    }
  }
</script>

<style scoped>

</style>
