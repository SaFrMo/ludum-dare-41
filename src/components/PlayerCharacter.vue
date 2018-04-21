<template>

    <circle class="player-character" :cx="cmpX" :cy="cmpY" :r="r * 100 + '%'"/>

</template>

<script>
const upKeycodes = [38, 87]
const rightKeycodes = [39, 68]
const downKeycodes = [40, 83]
const leftKeycodes = [37, 65]
const allKeys = upKeycodes.concat(rightKeycodes, downKeycodes, leftKeycodes)

const pythInverse = 1 / Math.SQRT2

export default {
    data() {
        return {
            cx: 0.5,
            cy: 0.5,
            r: 0.02,
            // -1 to 1 in both directions
            velocity: { x: 0, y: 0 },
            keysDown: [],
            // n, s, e, w - 0 or 1
            directions: [0, 0, 0, 0]
        }
    },
    computed: {
        cmpX() {
            return this.cx * 100 + '%'
        },
        cmpY() {
            return this.cy * 100 + '%'
        }
    },
    mounted() {
        addEventListener('keydown', this.onKeyDown)
        addEventListener('keyup', this.onKeyUp)

        this.update()
    },
    methods: {
        onKeyDown(evt) {
            if (
                allKeys.includes(evt.keyCode) &&
                !this.keysDown.includes(evt.keyCode)
            ) {
                this.keysDown.push(evt.keyCode)
            }
        },
        onKeyUp(evt) {
            if (
                allKeys.includes(evt.keyCode) &&
                this.keysDown.includes(evt.keyCode)
            ) {
                const index = this.keysDown.indexOf(evt.keyCode)
                this.keysDown.splice(index, 1)
            }
        },
        update() {
            // calculate velocity
            this.velocity.x = this.keysDown.some(k => rightKeycodes.includes(k))
                ? 1
                : 0
            this.velocity.x += this.keysDown.some(k => leftKeycodes.includes(k))
                ? -1
                : 0

            this.velocity.y = this.keysDown.some(k => upKeycodes.includes(k))
                ? -1
                : 0
            this.velocity.y += this.keysDown.some(k => downKeycodes.includes(k))
                ? 1
                : 0

            // If the player is moving diagonally, the resulting vector
            // will have a magnitude greather than the defined speed.
            // This section makes the magnitude of the player's movement
            // match the defined speed.
            const angleDampen =
                this.velocity.x != 0 && this.velocity.y != 0 ? pythInverse : 1

            const speedDampen = 0.002

            this.cx += this.velocity.x * speedDampen * angleDampen
            this.cy += this.velocity.y * speedDampen * angleDampen

            requestAnimationFrame(this.update)
        }
    },
    watch: {
        cx(newVal) {
            this.$store.commit('SET_PLAYER_X', newVal)
        },
        cy(newVal) {
            this.$store.commit('SET_PLAYER_Y', newVal)
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

circle.player-character {
    fill: $black;
    stroke: $white;
    stroke-width: 2px;
}
</style>
