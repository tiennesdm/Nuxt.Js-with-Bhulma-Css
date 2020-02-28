import Vue from 'vue'
import Router from 'vue-router'

import Login from '~/pages/Login.vue'
import Index from '~/pages/index.vue'
//import About from '~/pages/about'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/login',
                component: Login
            },
            {
                path: '/',
                component: Index
            }
            // {
            //     path: '/about',
            //     component: About
            // }
        ]
    })
}