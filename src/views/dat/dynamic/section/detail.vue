<template>
    <b-card-group v-if="aboutID">
        <b-card :title="`aboutID.title`"
                :sub-title="`aboutID['sub-title']`"
                :img-src="`aboutID['img-src']}`"
                img-top
                :border-variant="`aboutID.variant`"
                class="mb-2"
        >
            <b-list-group flush>
                <b-list-group-item>
                    <b-embed type="iframe"
                             aspect="16by9"
                             :src="`aboutID['youtube-src']}`"
                    />
                    <p class="card-text" style="text-align: center;font-style: italic">วีดีโอแนะนำของสาขานี้ฮะ</p>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button variant="outline-dark"
                              :href="`aboutID.web`"
                    >
                        หน้าเว็ปไซต์หลัก
                    </b-button>
                    |
                    <b-button variant="outline-dark"
                              :href="`aboutID.pdf`"
                    >
                        หลักสูตร
                    </b-button>
                </b-list-group-item>
                <b-list-group-item>
                    <p class="card-text">Social Media</p>
                    <b-button variant="primary"
                              :href="`aboutID.fb`"
                    >
                        Facebook
                    </b-button>
                    |
                    <b-button variant="danger"
                              href="https://www.youtube.com/channel/UCOMVmuT0gRQxBGAFBDgqBLg">
                        Youtube
                    </b-button>
                </b-list-group-item>
            </b-list-group>
        </b-card>
    </b-card-group>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "template",
        data() {
            return {
                aboutID: null
            }
        },
        created() {
            firebase.firestore().collection('collection').document(this.$route.params.sectionID).collection('article').document('about').get().then(doc => {
                this.aboutID = doc.data()
            })
        }
    }
</script>

<style scoped>

</style>
