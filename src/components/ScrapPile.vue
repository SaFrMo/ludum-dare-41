<template>

    <rect
        class="scrap-pile"
        :x="x * 100 + '%'"
        :y="y * 100 + '%'"
        :width="width * 100 + '%'"
        :height="height * 100 + '%'"/>

</template>

<script>
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
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

rect.scrap-pile {
    background-color: transparent;
    stroke: $white;
    stroke-width: 2px;
}
</style>
