<template>

    <aside class="sidebar">

        <h2 class="day">Day {{ $route.params.day }}</h2>

        <ul class="stats">

            <li class="row">
                <bar-graph :current="40"/>
                <span class="label">HP</span>
            </li>

            <li class="row">
                <bar-graph :current="40"/>
                <span class="label">Scrap</span>
            </li>

        </ul>

    </aside>

</template>

<script>
</script>

<style lang="scss">
@import 'src/styles/vars';

aside.sidebar {
    width: 300px;
    border: 2px solid $white;
    position: absolute;
    top: $desktop-padding;
    right: 0;
    bottom: $desktop-padding;

    .day {
        background-color: $white;
        color: $black;
        margin: 0;
        padding: $desktop-padding;
    }

    // stats
    .stats {
        list-style: none;
        margin: #{$desktop-padding - 5px} 0;
        padding: 0;
    }
    .stats .row {
        display: flex;
        justify-content: space-between;
        padding: 5px $desktop-padding;

        &:nth-child(even) {
            background-color: $monitor;
        }

        .bar-graph {
            height: 20px;
        }
        .label {
            width: 100px;
            text-align: right;
        }
    }
}
</style>
