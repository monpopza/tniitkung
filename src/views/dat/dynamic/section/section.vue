<template>
    <b-card-group deck>
        <b-card
            v-for="(section , index) in sections"
            :key="`section_${index}`"
            :title="section.title"
            :sub-title="section['sub-title']"
            :img-src="section.pic"
            :img-alt="section['img-alt']"
            img-top
            style="margin:1rem 0.25rem 0.25rem; max-width: 50rem;"
            tag="article"
            class="mb-2"
            :bg-variant="section.variant"
            text-variant="white"
            card-sub-title-text-variant="white"
        >
            <footer>
                <b-button :to="`/sections/${section.key}`" variant="light">สนใจสาขานี้ใช่ไหม</b-button>
            </footer>
        </b-card>
    </b-card-group>
</template>

<script>
    import Firebase from '@/Firebase'

    export default {
        name: 'selection',
        data () {
            return {
                sections: []
            }
        },
        created () {
            let arr = []

            Firebase.firestore().collection('collection').get().then(list => {
                list.forEach(doc => arr.push({
                    ...doc.data(),
                    key: doc.id
                }))
            })

            this.sections = arr
        }
    }
</script>

<style scoped>

</style>
