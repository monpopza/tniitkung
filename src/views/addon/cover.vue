<template>
    <div id="cover">
        <b-img src="../views/addon/cover.png" style="width: 100%;"/>
        <br/>
        <b-button to="/camera" variant="primary">Camera</b-button>
    </div>
</template>

<script>
    export default {
        name: "cover"
    }
</script>

<style scoped>
    #cover {
        width: 80%;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
    }
</style>
