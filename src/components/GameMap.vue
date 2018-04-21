<template>

    <svg
        class="game-map"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        :view-box.camel="cmpViewBox">

        <player-character/>

    </svg>

</template>

<script>
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
        }
    }
}
</script>

<style lang="scss">
svg.game-map {
}
</style>
