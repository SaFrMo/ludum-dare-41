<template>

    <section class="scrap-holder">

        <h2 class="title">Pack Contents</h2>

        <div class="graph-wrap">
            <bar-graph :current="$store.state.currentLoad" :max="$store.state.carryWeight"/>
            <span class="label">{{ $store.state.currentLoad }}</span>
        </div>

    </section>

</template>

<style lang="scss">
section.scrap-holder {
    .graph-wrap {
        display: flex;

        .label {
            width: 100px;
            text-align: right;
        }
    }
    .bar-graph {
        width: 100%;
        height: 20px;

        .amount {
            transition: none;
        }
    }
}
</style>
