import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/dat/Home.vue'

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
      path: '/camera',
      name: 'Camera',
      component: () => import('./views/addon/Camera.vue')
    },
    {
      path: '/sections',
      name: 'selection',
      component: () => import('./views/dat/dynamic/section/section.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/dat/dynamic/about/about.vue')
    },
    {
      path: '/about/:aboutID',
      name: 'about',
      component: () => import('./views/dat/dynamic/about/detail.vue')
    },
    {
      path: '/sections/:sectionID',
      name: 'sectionID',
      component: () => import('./views/dat/dynamic/section/detail.vue')
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
