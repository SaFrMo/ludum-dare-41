<template>

    <g class="scrap-pile" v-if="value > 0">

        <interaction-zone
            @interacting="onInteract"
            :text="cmpText"
            :relativeSize="[0.2, 0.5]"/>

        <rect
            class="item"
            :x="x * 100 + '%'"
            :y="y * 100 + '%'"
            :width="width * 100 + '%'"
            :height="height * 100 + '%'"/>

    </g>

</template>

<script>
export default {
    data() {
        return {
            playerMining: false,
            value: null
        }
    },
    props: {
        x: {
            type: [Number, String],
            default: 0.25
        },
        y: {
            type: [Number, String],
            default: 0.25
        },
        width: {
            type: Number,
            default: 0.1
        },
        height: {
            type: Number,
            default: 0.05
        },
        scrap: {
            type: Number,
            default: 20
        }
    },
    mounted() {
        this.value = this.scrap
    },
    computed: {
        cmpRemaining() {
            return Math.ceil(this.value / this.scrap * 100)
        },
        cmpText() {
            return `[SPACE]: harvest (${this.cmpRemaining}% remaining)`
        }
    },
    methods: {
        onInteract() {
            this.value -= this.$store.state.dps * 0.1
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

g.scrap-pile {
    background-color: transparent;

    .interact {
        fill: $interaction;
    }

    .item {
        stroke: $white;
        stroke-width: 2px;
    }

    text {
        text-anchor: middle;
        fill: $white;
    }
}
</style>
