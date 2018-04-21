<template>

    <g class="scrap-pile">

        <rect
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
    </g>

</template>

<script>
import { contains } from '@/utils'

export default {
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
        }
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
}
</style>
