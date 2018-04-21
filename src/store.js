import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sidebarOpened: true,
        health: 100, // out of 100
        maxSpeed: 1,
        carryWeight: 10,
        triviaLocked: false,
        objective: 'Find 100 scrap.',
        dps: 1,
        playerPosition: [0.5, 0.5],
        diary: []
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebarOpened = !state.sidebarOpened
        },
        LOCK_TRIVIA: (state, payload) => {
            state.triviaLocked = true
        },
        UNLOCK_TRIVIA: state => {
            state.triviaLocked = false
        },
        SET_PLAYER_X: (state, payload) => {
            Vue.set(state.playerPosition, 0, payload)
        },
        SET_PLAYER_Y: (state, payload) => {
            Vue.set(state.playerPosition, 1, payload)
        },
        INCREASE_MAX_SPEED: state => {
            state.maxSpeed += 0.5
        },
        INCREASE_CARRY_WEIGHT: state => {
            state.carryWeight += 10
        },
        INCREASE_DPS: state => {
            state.dps += 1
        }
    }
})
