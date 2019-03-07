<template>
    <b-card-group deck>
        <b-card
                v-for="(detail, index) in aboutID"
                :key="`detail${index}`"
                :title="detail.name"
                :sub-title="detail.date"
                :img-src="detail.pic"
                img-top
                style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
                tag="article"
                class="mb-2"
                border-variant="dark"
        >
            <footer>
                <b-button :to="`/about/${detail.key}`" variant="dark">อ่านต่อ...</b-button>
            </footer>
        </b-card>
    </b-card-group>
</template>

<script>
  import Firebase from '@/Firebase'

  export default {
    name: 'exchange',
    data () {
      return {
        aboutID: []
      }
    },
    created () {
      let arr = []

      Firebase.firestore().collection('data').doc('about').collection('about').get().then(list => {
        list.forEach(doc => arr.push({
          ...doc.data(),
          key: doc.id
        }))
      })

      this.aboutID = arr
    }
  }
</script>

<style scoped>

</style>
