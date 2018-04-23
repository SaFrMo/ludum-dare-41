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
        objective: 'Collect at least 50kg scrap before daylight runs out.',
        dps: 1,
        playerPosition: [0.5, 0.5],
        diary: [],
        daylight: balance.dayLength,
        storedScrap: 0,
        errors: [],
        showInstructions: true
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
            state.currentLoad += parseFloat(payload)
            state.currentLoad = state.currentLoad.toFixed(1)
            state.currentLoad = Math.min(state.currentLoad, state.carryWeight)
        },
        DROP_OFF_SCRAP: state => {
            state.storedScrap += state.currentLoad
            state.currentLoad = 0
        },
        SHOW_ERROR: (state, payload) => {
            if (!state.errors.includes(payload)) {
                state.errors.push(payload)
            }
        },
        SPLICE_ERROR: (state, payload) => {
            state.errors.splice(payload, 1)
        },
        SHOW_INSTRUCTIONS: (state, payload) => {
            state.showInstructions = payload
        },
        SET_OBJECTIVE: (state, payload) => {
            state.objective = payload
        }
    }
})
