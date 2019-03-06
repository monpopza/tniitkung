<template>
    <div id="app">
        <b-navbar toggleable="md" type="light" variant="light" v-if="!$route.meta.noNav">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand to="/camera"><b-img src="/pic/QRCode.png" style="width:10vw;"alt-img="QR Code"/></b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item to="/home">Home</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                    <b-nav-item to="/sections">Curriculum</b-nav-item>
                    <b-nav-item to="/news">News</b-nav-item>
                    <b-nav-item to="/exchange">Exchange</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div style="max-width: 50rem; margin: 0 auto;">
            <router-view/>
        </div>
        <footer v-if="!$route.meta.noNav">
            <p>2018 TNI-アイテークン</p>
        </footer>
    </div>
</template>

<script>
    import Firebase from '@/Firebase'
    export default {
        name: 'App',
        beforeCreate() {
            Firebase.initializeApp({
                apiKey: "AIzaSyBL-uVhmLKM0avLoOWGc-D_ygM66lpFo8A",
                authDomain: "tniitkung.firebaseapp.com",
                databaseURL: "https://tniitkung.firebaseio.com",
                storeBucket: "tniitkung.appspot.com",
                projectId: "tniitkung"
            })
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Sarabun&subset=latin-ext,thai');

    #app {
        max-width: 100%;
        width: 100%;
        overflow: hidden;
    }

    footer p {
        text-align: center;
    }

    body {
        background-color: #fffdff;
        font-family: 'Sarabun', sans-serif !important;
    }
</style>
