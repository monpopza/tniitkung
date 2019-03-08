<template>
    <b-card-group v-if="about">
        <b-card :title="about.title"
                :sub-title="about['sub-title']"
                :img-src="about['img-src']"
                img-top
                :border-variant="about.variant"
                class="mb-2"

        >
            <b-list-group flush>
                <b-list-group-item>
                    <b-embed type="iframe"
                             aspect="16by9"
                             :src="about['youtube-src']"
                    />
                    <b-card-text style="text-align: center;font-style: italic">วีดีโอแนะนำของสาขานี้</b-card-text>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card-text>{{about.description}}</b-card-text>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button variant="outline-dark"
                              :href="about.pdf"
                    >
                        หลักสูตรของสาขา
                    </b-button>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card-text>Website และ Social Media<br><br>
                        <b-button variant="success"
                                  :href="about.web"
                        >
                            Website
                        </b-button>
                        |
                        <b-button variant="primary"
                                  :href="about.fb"
                        >
                            Facebook
                        </b-button>
                        |
                        <b-button variant="danger"
                                  href="https://www.youtube.com/channel/UCOMVmuT0gRQxBGAFBDgqBLg">
                            Youtube
                        </b-button>
                    </b-card-text>
                </b-list-group-item>
            </b-list-group>
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
    created () {
      Firebase.firestore().collection('collection').doc(this.$route.params.sectionID).collection('article').doc('about').get().then(doc => {
        this.about = doc.data()
      })
    }
  }
</script>

<style scoped>

</style>
