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
            path: '/internship',
            name: 'internship',
            component: () => import('./views/dat/internship.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/dat/About.vue')
        },
        {
            path: '/camera',
            name: 'camera',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/addon/Camera.vue')
        },
        {
            path: '/sections',
            name: 'sections',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/dat/section/Section.vue')
        },
        {
            path: '/listing',
            name: 'listing',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/listing.vue')
        },
        {
            path: '/tni',
            name: 'tni',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/dat/TNI.vue')
        },
        {
            path: '/news',
            name: 'News',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/dat/news/news.vue')
        },
        {
            path: '/section/it',
            name: 'it',
            component: () => import('./views/dat/section/it.vue')
        },
        {
            path: '/section/bi',
            name: 'bi',
            component: () => import('./views/dat/section/bi.vue')
        },
        {
            path: '/section/mt',
            name: 'mt',
            component: () => import('./views/dat/section/mt.vue')
        },
        {
            path: '/section/dc',
            name: 'dc',
            component: () => import('./views/dat/section/dc.vue')
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
