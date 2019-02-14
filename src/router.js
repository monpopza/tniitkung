import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'cover',
            meta: {
                noNav: true
            },
            component: () => import('./views/addon/cover.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/sections',
            name: 'selection',
            component: () => import('./views/dat/dynamic/selection.vue')
        },
        {
            path: '/sections/:sectionID',
            name: 'sectionId',
            component: () => import('./views/dat/dynamic/sections.vue')
        },
        {
            path: '/*',
            name: 'Not Found',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/error/notfound.vue')
        }

    ]
})
/*
{

            path: '/section/:sections/article/:article',
            name: 'content',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
//            component: () => import(/* webpackChunkName: "about" */ //'./views/listing.vue')
//,
