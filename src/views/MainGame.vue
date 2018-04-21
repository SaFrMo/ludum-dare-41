<template>

    <main class="main-game" v-full-height.min>

        <game-map/>

        <transition name="reveal" appear>
            <h2 class="objective" v-if="showObjective">{{ $store.state.objective }}</h2>
        </transition>

        <side-bar v-if="$store.state.sidebarOpened"/>

    </main>

</template>

<script>
export default {
    data() {
        return {
            showObjective: true,
            interval: null
        }
    },
    mounted() {
        setTimeout(() => (this.showObjective = false), 3000),
            (this.interval = setInterval(this.masterUpdate, 500))
    },
    methods: {
        masterUpdate() {
            // Decrease daylight
            this.$store.commit('DECREASE_DAYLIGHT')
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

main.main-game {
    .objective {
        position: absolute;
        top: 50%;
        right: 0;
        left: 0;
        background-color: lighten($black, 30%);
        padding: 10px;
        text-align: center;
        z-index: 5;
        transform: translateY(-50%);
    }
}
</style>
