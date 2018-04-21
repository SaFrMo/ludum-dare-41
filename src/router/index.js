import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/views/FrontPage'
import MainGame from '@/views/MainGame'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'FrontPage',
            component: FrontPage
        },
        {
            path: '/day-:day',
            name: 'MainGame',
            component: MainGame
        }
    ]
})
