<template>

    <g class="interaction-zone">
        <rect
            v-if="inRange"
            class="interact"
            :x="interactDimensions.x"
            :y="interactDimensions.y"
            :width="interactDimensions.width"
            :height="interactDimensions.height"/>

        <text
            v-if="text && inRange"
            :x="cmpTextX"
            :y="(y - 0.02) * 100 + '%'">
            {{ text }}
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
            interacting: false
        }
    },
    props: {
        relativeSize: {
            type: Array,
            default: () => [0.5, 0.5]
        },
        x: {
            type: [Number, String],
            default: 0.5
        },
        y: {
            type: [Number, String],
            default: 0.5
        },
        width: {
            type: Number,
            default: 0.1
        },
        height: {
            type: Number,
            default: 0.05
        },
        text: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.interval = setInterval(this.update, 100)
        addEventListener('keydown', this.onKeyDown)
        addEventListener('keyup', this.onKeyUp)
    },
    beforeDestroy() {
        clearInterval(this.interval)
        removeEventListener('keydown', this.onKeyDown)
        removeEventListener('keyup', this.onKeyUp)
    },
    watch: {
        '$store.state.playerPosition'(newVal) {
            // see if we're close enough to trigger interaction
            const interactZoneBottomLeft = [
                this.x - this.width * this.relativeSize[0],
                parseFloat(this.y) +
                    parseFloat(this.height) +
                    parseFloat(this.height) * this.relativeSize[1]
            ]
            const interactZoneTopRight = [
                parseFloat(this.x) +
                    parseFloat(this.width) +
                    parseFloat(this.width) * this.relativeSize[0],
                this.y - this.height * this.relativeSize[1]
            ]
            this.inRange = contains(
                interactZoneBottomLeft,
                interactZoneTopRight,
                newVal
            )
        }
    },
    computed: {
        interactDimensions() {
            return {
                x: (this.x - this.width * this.relativeSize[0]) * 100 + '%',
                y: (this.y - this.height * this.relativeSize[1]) * 100 + '%',
                width:
                    (this.width + this.width * this.relativeSize[0] * 2) * 100 +
                    '%',
                height:
                    (this.height + this.height * this.relativeSize[1] * 2) *
                        100 +
                    '%'
            }
        },
        cmpTextX() {
            return (
                (parseFloat(this.x) + parseFloat(this.width) * 0.5) * 100 + '%'
            )
        }
    },
    methods: {
        onKeyDown(evt) {
            if (evt.keyCode == 32) {
                this.interacting = true
            }
        },
        onKeyUp(evt) {
            if (evt.keyCode == 32) {
                this.interacting = false
            }
        },
        update() {
            if (this.inRange && this.interacting) {
                this.$emit('interacting')
            }
        }
    }
}
</script>
