<template>
    <b-card-group v-if="sectionInfo" desk>
        <b-card
            :title="`sectionInfo.title`"
            :sub-title="`sectionInfo['sub-title']`"
            :img-src="`sectionInfo.pic`"
            :img-alt="`sectionInfo['img-alt']`"
            img-top
            style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
            tag="article"
            class="mb-2"
            :bg-variant="`sectionInfo.variant`"
            text-variant="white"
        >
            <footer>
                <b-button :to="`/section/${$route.params.sectionInfo}`" variant="light">สนใจสาขานี้ใช่ไหมฮะ</b-button>
            </footer>
        </b-card>
    </b-card-group>
</template>

<script>
    export default {
        name: "selection",
        data() {
            return {
                sectionInfo: null
            }
        },
        created() {
            firebase.firestore().collection('collection').document(this.$route.params.sectionID).get().then(doc => {
                this.sectionInfo = doc.data()
            })
        }
    }
</script>

<style scoped>

</style>
