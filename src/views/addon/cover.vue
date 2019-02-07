<template>
    <div id="cover">
        <b-img
            src="https://scontent.fbkk3-2.fna.fbcdn.net/v/t1.0-9/22406310_194532097757913_6072644510784826025_n.png?_nc_cat=108&_nc_eui2=AeFgUWB5I-7g-7PmGoSqnqz_tYkljvvl0JErHqh4iw9IasN-dkdqFYuEWrSW1iI_PRMm15bgsMFS0cRxOUaOBap43wDcajjN_-LEoFkLur4FUeZ1oGBhvwKRIAuFIIFpvNE&_nc_ht=scontent.fbkk3-2.fna&oh=f7d5305df1a307187e75789afb03be7e&oe=5CB6A133"
            style="width: 100%;margin-bottom:2rem;"/>
        <br/>
        <b-button to="/camera" variant="primary">จิ้มเพื่อแสกน QR Code</b-button>
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
