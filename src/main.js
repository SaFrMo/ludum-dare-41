import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Components
Vue.component('fullscreen-text', require('@/components/FullscreenText').default)

// Directives
Vue.directive('full-height', require('fh-components/v-full-height'))

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
