<template>

    <aside class="sidebar">

        <h2 class="day">Day {{ $route.params.day }}</h2>

        <ul class="stats">

            <li class="row">
                <bar-graph :current="$store.state.health"/>
                <span class="label">HP</span>
            </li>

            <!-- <li class="row">
                <bar-graph :current="40"/>
                <span class="label">Energy</span>
            </li> -->

            <li class="row">
                <bar-graph :current="$store.state.daylight" :max="balance.dayLength"/>
                <span class="label">Daylight</span>
            </li>

        </ul>

        <div class="spacer"/>

        <trivia-section/>

        <div class="spacer"/>

        <h3 class="goal">{{ $store.state.objective }}</h3>

        <div class="criticals">
            <!-- <h3 class="label">Criticals</h3> -->

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
                <li class="row">
                    <span class="key">Mining Laser (DPS)</span>
                    <span class="value">
                        <span class="number">{{ cmpLaserPower }}</span>
                    </span>
                </li>
            </ul>
        </div>

    </aside>

</template>

<script>
// increase displayed stats so we're not just starting at 1
const speedDisplayBoost = 3
const carryWeightDisplayBoost = 1
const laserPowerDisplayBoost = 1
import balance from '@/utils/balance'

export default {
    data() {
        return {
            balance
        }
    },
    computed: {
        cmpMaxSpeed() {
            return (this.$store.state.maxSpeed * speedDisplayBoost).toFixed(1)
        },
        cmpCarryWeight() {
            return (
                this.$store.state.carryWeight * carryWeightDisplayBoost
            ).toFixed(1)
        },
        cmpLaserPower() {
            return (this.$store.state.dps * laserPowerDisplayBoost).toFixed(1)
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
    overflow-y: auto;

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

        // &:nth-child(even) {
        //     background-color: $monitor;
        // }

        .bar-graph {
            height: 20px;
        }
        .label {
            width: 120px;
            text-align: right;
        }
    }

    // trivia
    .trivia {
        align-items: center;
        height: fit-content;
    }

    // spacer
    .spacer {
        flex: 1;
    }

    // goal
    .goal {
        margin: $desktop-padding;
        line-height: 1;
        border-left: 1px dotted;
        padding-left: $desktop-padding;
    }

    // criticals
    .criticals {
        background-color: $white;
        color: $black;
        padding: 0 $desktop-padding $desktop-padding;

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
