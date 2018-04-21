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
                <span class="label">Energy</span>
            </li>

        </ul>

        <trivia-section/>

        <div class="spacer"/>

        <div class="criticals">
            <h3 class="label">Criticals</h3>

            <ul class="crit-stats">
                <li class="row">
                    <span class="key">Max Speed (m/s)</span>
                    <span class="value">
                        <span class="number">{{ cmpMaxSpeed }}</span>
                    </span>
                </li>
                <li class="row">
                    <span class="key">Carry Weight (kg)</span>
                    <span class="value">
                        <span class="number">{{ cmpCarryWeight }}</span>
                    </span>
                </li>
            </ul>
        </div>

    </aside>

</template>

<script>
export default {
    computed: {
        cmpMaxSpeed() {
            return this.$store.state.maxSpeed.toFixed(1)
        },
        cmpCarryWeight() {
            return this.$store.state.carryWeight.toFixed(1)
        }
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';

aside.sidebar {
    width: 300px;
    border: 2px solid $white;
    position: absolute;
    top: $desktop-padding;
    right: $desktop-padding;
    bottom: $desktop-padding;
    display: flex;
    flex-direction: column;
    background-color: $black;

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

    // trivia

    // spacer
    .spacer {
        flex: 1;
    }

    // criticals
    .criticals {
        background-color: $white;
        color: $black;
        padding: $desktop-padding;

        .label {
            margin: 0;
        }
        .crit-stats {
            margin: 0;
            padding: 0;
            list-style: none;

            .row {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                margin-top: 15px;
            }
            .row .number {
                font-size: 40px;
                line-height: 0.8;
            }
            .row .text {
                font-size: 20px;
                line-height: 0.8;
            }
        }
    }
}
</style>
