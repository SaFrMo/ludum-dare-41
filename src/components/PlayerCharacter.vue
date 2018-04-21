<template>

    <circle class="player-character" :cx="cmpX" :cy="cmpY" r="2%"/>

</template>

<script>
export default {
    data() {
        return {
            cx: 0.5,
            cy: 0.5
        }
    },
    computed: {
        cmpX() {
            return this.cx * 100 + '%'
        },
        cmpY() {
            return this.cy * 100 + '%'
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

circle.player-character {
    fill: transparent;
    stroke: $white;
    stroke-width: 2px;
}
</style>
