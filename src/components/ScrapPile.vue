<template>

    <g class="scrap-pile" v-if="value > 0">

        <rect
            v-if="inRange"
            class="interact"
            :x="interactDimensions.x"
            :y="interactDimensions.y"
            :width="interactDimensions.width"
            :height="interactDimensions.height"/>

        <rect
            class="item"
            :x="x * 100 + '%'"
            :y="y * 100 + '%'"
            :width="width * 100 + '%'"
            :height="height * 100 + '%'"/>

        <text
            v-if="inRange"
            :x="(x  + width * 0.5) * 100 + '%'"
            :y="(y - 0.02) * 100 + '%'">
            [SPACE]: harvest ({{ cmpRemaining }}% remaining)
        </text>

    </g>

</template>

<script>
import { contains } from '@/utils'

export default {
    data() {
        return {
            inRange: false,
            interval: null,
            playerMining: false,
            value: null
        }
    },
    props: {
        x: {
            type: Number,
            default: 0.25
        },
        y: {
            type: Number,
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
        interactZone: {
            type: Number,
            default: 0.5
        },
        scrap: {
            type: Number,
            default: 20
        }
    },
    mounted() {
        this.value = this.scrap
        this.interval = setInterval(this.update, 100)
        addEventListener('keydown', this.onKeyDown)
        addEventListener('keyup', this.onKeyUp)
    },
    beforeDestroy() {
        clearInterval(this.interval)
        removeEventListener('keydown', this.onKeyDown)
        removeEventListener('keyup', this.onKeyUp)
    },
    computed: {
        interactDimensions() {
            return {
                x: (this.x - this.width * this.interactZone) * 100 + '%',
                y: (this.y - this.height * this.interactZone) * 100 + '%',
                width:
                    (this.width + this.width * this.interactZone * 2) * 100 +
                    '%',
                height:
                    (this.height + this.height * this.interactZone * 2) * 100 +
                    '%'
            }
        },
        cmpRemaining() {
            return Math.ceil(this.value / this.scrap * 100)
        }
    },
    watch: {
        '$store.state.playerPosition'(newVal) {
            // see if we're close enough to trigger interaction
            const interactZoneBottomLeft = [
                this.x - this.width * this.interactZone,
                this.y + this.height + this.height * this.interactZone
            ]
            const interactZoneTopRight = [
                this.x + this.width + this.width * this.interactZone,
                this.y - this.height * this.interactZone
            ]
            this.inRange = contains(
                interactZoneBottomLeft,
                interactZoneTopRight,
                newVal
            )
        }
    },
    methods: {
        onKeyDown(evt) {
            if (evt.keyCode == 32) {
                this.playerMining = true
            }
        },
        onKeyUp(evt) {
            if (evt.keyCode == 32) {
                this.playerMining = false
            }
        },
        update() {
            if (this.inRange && this.playerMining) {
                this.value -= this.$store.state.dps * 0.1
            }
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
