import Vue from 'vue'
import Vuex from 'vuex'
import balance from '@/utils/balance'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sidebarOpened: true,
        health: 100, // out of 100
        maxSpeed: 1,
        carryWeight: 10,
        currentLoad: 0,
        triviaLocked: false,
        objective: 'Find 100 scrap before daylight runs out.',
        dps: 1,
        playerPosition: [0.5, 0.5],
        diary: [],
        daylight: balance.dayLength
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
            state.maxSpeed += balance.speedUpgrade
        },
        INCREASE_CARRY_WEIGHT: state => {
            state.carryWeight += balance.carryWeightUpgrade
        },
        INCREASE_DPS: state => {
            state.dps += balance.dpsUpgrade
        },
        DECREASE_DAYLIGHT: state => {
            // divide by 2 because this is called twice per second
            state.daylight -= 0.5
        },
        INCREASE_LOAD: (state, payload) => {
            state.currentLoad += payload
            state.currentLoad = Math.min(state.currentLoad, state.carryWeight)
        }
    }
})
