import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/dat/old/Home.vue'

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
            path: '/about',
            name: 'about',
            component: () => import('./views/dat/fixed/about.vue')
        },
        {
            path: '/about/tni',
            name: 'about_tni',
            component: () => import('./views/dat/fixed/tni.vue')
        },
        {
            path: '/camera',
            name: 'Camera',
            component: () => import('./views/addon/Camera.vue')
        },
        {
            path: '/sections',
            name: 'selection',
            component: () => import('./views/dat/dynamic/section/selection.vue')
        },
        {
            path: '/sections/:sectionID',
            name: 'sectionID',
            component: () => import('./views/dat/dynamic/section/sections.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('./views/dat/dynamic/news/news.vue')
        },
        {
            path: '/news/:newsID',
            name: 'news_detail',
            component: () => import('./views/dat/dynamic/news/detail.vue')
        },
        {
            path: '/exchange',
            name: 'Scholarship',
            component: () => import('./views/dat/dynamic/exchange/exchange.vue')
        },
        {
            path: '/exchange/:exchangeID',
            name: 'scholarship_detail',
            component: () => import('./views/dat/dynamic/exchange/detail.vue')
        },
        {
            path: '/*',
            name: 'Not Found',
            component: () => import('./views/error/notfound.vue')
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
