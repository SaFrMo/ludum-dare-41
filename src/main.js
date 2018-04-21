import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Components
Vue.component('fullscreen-text', require('@/components/FullscreenText').default)
Vue.component('side-bar', require('@/components/SideBar').default)
Vue.component('bar-graph', require('@/components/BarGraph').default)
Vue.component('trivia-section', require('@/components/TriviaSection').default)
Vue.component('game-map', require('@/components/GameMap').default)
Vue.component(
    'player-character',
    require('@/components/PlayerCharacter').default
)
Vue.component('scrap-pile', require('@/components/ScrapPile').default)
Vue.component('home-base', require('@/components/HomeBase').default)
Vue.component(
    'interaction-zone',
    require('@/components/InteractionZone').default
)
Vue.component('scrap-holder', require('@/components/ScrapHolder').default)
Vue.component('error-wrap', require('@/components/ErrorWrap').default)

// Directives
Vue.directive('full-height', require('fh-components/v-full-height'))

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
