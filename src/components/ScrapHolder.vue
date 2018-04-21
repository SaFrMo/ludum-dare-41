<template>

    <section class="scrap-holder">

        <h2 class="title">Pack Contents</h2>

        <bar-graph :current="$store.state.currentLoad" :max="$store.state.carryWeight"/>

    </section>

</template>

<style lang="scss">
section.scrap-holder {
    .bar-graph {
        width: 100%;
        height: 20px;
    }
}
</style>
