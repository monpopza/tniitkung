<template>
    <div id="cover">
        <b-img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t31.0-8/26232847_1932490450112989_6803324557161425106_o.jpg?_nc_cat=103&_nc_eui2=AeHNZnSL3tBjWbWEYi42MFW9J3gYYWnyFiLsqLmTobtoNEU5ZGsBiJuiYba3KBuosjjwZO3gWUXk_xNo1N9KSX8IDLcrrAaNVx7qbSqI64WyEQ&_nc_ht=scontent.fbkk8-2.fna&oh=a36ee722ab61e72458e459a73d625c6e&oe=5CF7360A" style="width: 100%;"/>
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
