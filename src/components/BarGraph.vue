<template>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 100 100"
        class="bar-graph"
        preserveAspectRatio="none">

        <rect width="100%" height="100" class="background"/>
        <rect :width="cmpWidth" height="100" class="amount"/>

    </svg>

</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            default: 50
        },
        max: {
            type: Number,
            default: 100
        }
    },
    computed: {
        cmpWidth() {
            return this.current / this.max * 100 + '%'
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

svg.bar-graph {
    .background {
        width: 100%;
        fill: $gray;
    }
    .amount {
        fill: $white;
    }
}
</style>
