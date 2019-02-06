<template>
    <div id="app">
        <b-navbar toggleable="md" type="light" variant="light" v-if="!$route.meta.noNav">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand to="/camera">📷</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item to="/home">Home</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                    <b-nav-item to="/sections">Curriculum</b-nav-item>
                    <b-nav-item to="/news">News</b-nav-item>
                    <b-nav-item to="/internship">Exchange</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/tni">Thai-Nichi Institute of Technology</b-nav-item>
                    <!-- Using button-content slot -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <!-- navbar-1.vue -->

        <div style="max-width: 50rem; margin: 0 auto;">
            <router-view/>
        </div>
        <footer v-if="!$route.meta.noNav">
            <p>2018 TNI-アイテークン</p>
        </footer>
    </div>
</template>

<script>
    import firebase from 'firebase'
    //ll
    export default {
        name: 'App',
        beforeCreate() {
            firebase.initializeApp({
                apiKey: "AIzaSyBL-uVhmLKM0avLoOWGc-D_ygM66lpFo8A",
                authDomain: "tniitkung.firebaseapp.com",
                databaseURL: "https://tniitkung.firebaseio.com",
                projectId: "tniitkung"
            })
        }//,
        //created () {
        // firebase.firestore().collection('collection').document('bi').get() // get BI information
        // firebase.firestore().collection('collection').document('bi').collection('room').get() // get all room infos for BI
        // firebase.firestore().collection('collection').document('bi').collection('room').document('b402').get() // get b402 from BI Room
        //
        // firebase.firestore().collection('collection').document('bi').collection('room').document('b402').get().then(doc => {
        //     console.log(doc.id, doc.data())
        // })
        //
        // firebase.firestore().collection('collection').document('bi').collection('room').get().then(dataSnapshot => {
        //     dataSnapshot.forEach(doc => {
        //         console.log(doc.id, doc.data())
        //     })
        // })
        //
        // firebase.firestore().collection('posts').where('userId', '==', this.$store.state.currentUser.uid).orderBy('timestamp', 'desc').limit(10).get(dataSnapshot => {
        //     dataSnapshot.forEach(doc => {
        //         console.log(doc.id, doc.data())
        //     })
        // })
        //}
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
    body{
        background-color: #fffdff;
        font-family: 'Sarabun', sans-serif !important;
    }
</style>
