<template>
    <b-card-group v-if="sectionID" desk>
        <b-card
            :title="`sectionID.title`"
            :sub-title="`sectionID['sub-title']`"
            :img-src="`sectionID.pic`"
            :img-alt="`sectionID['img-alt']`"
            img-top
            style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
            tag="article"
            class="mb-2"
            :bg-variant="`sectionID.variant`"
            text-variant="white"
        >
            <footer>
                <b-button :to="`/section/${$route.params.sectionID}`" variant="light">สนใจสาขานี้ใช่ไหม</b-button>
            </footer>
        </b-card>
    </b-card-group>
</template>

<script>
    export default {
        name: "selection",
        data() {
            return {
                sectionID: null
            }
        },
        created() {
            firebase.firestore().collection('collection').document(this.$route.params.sectionID).get().then(doc => {
                this.sectionID = doc.data()
            })
        }
    }
</script>

<style scoped>

</style>
