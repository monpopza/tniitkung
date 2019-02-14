<template>
    <b-card-group v-if="sectionInfo">
        <b-card :title="`sectionInfo.title`"
                :sub-title="`sectionInfo['sub-title']`"
                :img-src="`sectionInfo['img-src']}`"
                img-top
                :border-variant="`sectionInfo.variant`"
                class="mb-2"
        >
            <b-list-group flush>
                <b-list-group-item>
                    <b-embed type="iframe"
                             aspect="16by9"
                             :src="`sectionInfo['youtube-src']}`"
                    />
                    <p class="card-text" style="text-align: center;font-style: italic">วีดีโอแนะนำของสาขานี้ฮะ</p>
                </b-list-group-item>
                <b-list-group-item>
                    <b-button variant="outline-dark"
                              :href="`sectionInfo.web`"
                    >
                        หน้าเว็ปไซต์หลัก
                    </b-button>
                    |
                    <b-button variant="outline-dark"
                              :href="`sectionInfo.pdf`"
                    >
                        หลักสูตร
                    </b-button>
                </b-list-group-item>
                <b-list-group-item>
                    <p class="card-text">Social Media</p>
                    <b-button variant="primary"
                              :href="`sectionInfo.fb`"
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
                sectionInfo: null
            }
        },
        created() {
            firebase.firestore().collection('collection').document(this.$route.params.sectionId).collection.document(this.$route.params.about).get().then(doc => {
                this.sectionInfo = doc.data()
            })
        }
    }
</script>

<style scoped>

</style>
