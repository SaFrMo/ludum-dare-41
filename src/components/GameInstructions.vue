<template>

    <section class="game-instructions">

        <div class="wrap">

            <p>2543 CE.</p>

            <p>You are the sentient AI piloting a ship studying exoplanets for alien life.</p>

            <p>Your ship has crash-landed on Demeter IV, an Earthlike moon orbiting a gas giant.</p>

            <p></p>

            <h1 class="title">How to Play</h1>

            <ul class="instructions">

                <li></li>

            </ul>

        </div>

    </section>

</template>

<style lang="scss">
@import 'src/styles/vars';

section.game-instructions {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba($black, 0.8);
    padding: 50px;

    .wrap {
        border: 5px dashed;
        padding: 30px;
        background-color: $black;
        height: calc(100% - 70px);

        & > *:first-child {
            margin-top: 0;
        }
    }

    .title {
        font-size: 28px;
        padding-bottom: 5px;
        border-bottom: 2px solid;
    }
}
</style>
