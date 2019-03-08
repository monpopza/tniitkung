<template>
    <div id="cover">
        <b-img
            src="/pic/cover.png"
            style="width: 50vw;margin-bottom:2rem;"/>
        <br/>
        <p style="text-align: center;color: #2e2f7d;font-size: 1.5rem;font-weight: bold">คณะเทคโนโลยีสารสนเทศ<br/>สถาบันเทคโนโลยีไทย-ญี่ปุ่น</p>
    </div>
</template>

<script>
    export default {
        name: 'cover',
       created() {
           setTimeout(() => {
               this.$router.push('/home')
           }, 3500)
       }
    }
</script>

<style scoped>
    #cover {
        width: 80vw;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
    }
</style>
