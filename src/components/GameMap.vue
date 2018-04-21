<template>

    <svg
        class="game-map"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        :view-box.camel="cmpViewBox">

        <home-base/>

        <scrap-storage/>

        <g class="map-items">
            <scrap-pile
                v-for="(scrap, i) in dayMap.scrap"
                :x="scrap.x"
                :y="scrap.y"
                :key="i"
                :scrap="scrap.value"/>
        </g>

        <player-character/>

    </svg>

</template>

<script>
import days from '@/assets/days'

export default {
    data() {
        return {
            width: 0,
            height: 0
        }
    },
    mounted() {
        addEventListener('resize', this.onResize)
        this.onResize()
    },
    methods: {
        onResize() {
            this.width = window.innerWidth
            this.height = window.innerHeight
        }
    },
    computed: {
        cmpViewBox() {
            return `0 0 ${this.width} ${this.height}`
        },
        dayMap() {
            return days[this.$route.params.day]
        }
    }
}
</script>

<style lang="scss">
svg.game-map {
}
</style>
