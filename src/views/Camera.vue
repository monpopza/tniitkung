<template>
    <qrcode-stream @decode="onDecode" @init="onInit"/>
</template>

<script>
    export default {
        name: 'Camera',
        methods: {
            onDecode(result) {
                let webPrefix = `${location.protocol}//${document.domain}`
                if (result.startsWith(webPrefix)) {
                    result = result.substr(webPrefix.length)
                    console.log(`Redirecting to '${result}'`)
                    this.$router.push(result)
                }
            },
            onInit(initProcess) {
                initProcess.then(() => {
                    console.log('Camera Initialization Completed.')
                }).catch(error => {
                    console.error(error)
                    alert('Cannot open camera.')
                })
            }
        }
    }
</script>

<style scoped>
    /*No styles*/
</style>
