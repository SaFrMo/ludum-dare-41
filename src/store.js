import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sidebarOpened: true,
        health: 100 // out of 100
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebarOpened = !state.sidebarOpened
        }
    }
})
