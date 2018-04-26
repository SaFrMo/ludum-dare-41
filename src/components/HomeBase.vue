<template>

    <g class="home-base">
        <interaction-zone
            :x="x"
            :y="y"
            :width="width"
            :height="height"
            text="[SPACE]: Rest"
            @interact="$store.commit('START_REST')"/>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="home-base"
            :width="width * 100 + '%'"
            :x="x * 100 + '%'">
            <path d="M256 19.27L25.637 249.638 19.27 256 32 268.73l6.363-6.367L256 44.727l217.637 217.636L480 268.73 492.73 256l-6.367-6.363zM96 48v107.273l64-64.002V48zm160 20.727l-192 192V486h64V320h96v166h224V260.727zM288 320h96v80h-96z"/>
        </svg>
    </g>


</template>

<script>
export default {
    data() {
        return {
            x: 0.575,
            y: 0.475,
            width: 0.05,
            height: 0.05
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

g.home-base {
    path {
        fill: $white;
    }
}
</style>
