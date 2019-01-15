<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand to="/camera">📷</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                    <b-nav-item to="/section">CURRICULUM</b-nav-item>
                    <b-nav-item to="/listing">List</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/tni">THAI-NICHI INSTITUTE OF TECHNOLOGY</b-nav-item>
                    <!-- Using button-content slot -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <!-- navbar-1.vue -->

        <div style="max-width: 50rem; margin: 0 auto;">
            <router-view/>
        </div>
        <footer>
            <p>IT Kung Corperation</p>
        </footer>
    </div>
</template>

<script>
    import firebase from 'firebase'
    //ll
    export default {
        name: 'App',
        beforeCreate () {
            firebase.initializeApp({
                apiKey: "AIzaSyBL-uVhmLKM0avLoOWGc-D_ygM66lpFo8A",
                authDomain: "tniitkung.firebaseapp.com",
                databaseURL: "https://tniitkung.firebaseio.com",
                projectId: "tniitkung"
            })
        }
    }
</script>

<style lang="scss">
    footer p {
        text-align: center;
    }
</style>
