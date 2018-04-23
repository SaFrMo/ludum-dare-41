<template>

    <section class="game-instructions">

        <div class="wrap">

            <h2 class="title">[title]</h2>

            <p>You are the computer brain of a scientific vessel searching for life in distant solar systems.</p>

            <p>You've crash-landed on a world whose thick atmosphere and extreme weather are preventing you from sending your data.</p>

            <p>The crew all made it to the escape pods and are waiting for pickup in orbit. You'll need to piece together an engine and some shielding with the scrap from the wreck to join them.</p>

            <p><em>However...</em></p>

            <p>Your systems took some damage during the crash, and your repair hardware crossed wires with "Trivia Galaxy," a game meant to pass the time for the crew.</p>

            <p>The only way you can repair your system is by scoring points in the game.</p>

            <h2 class="title">How to Play</h2>

            <ul class="instructions">

                <li>WASD/Arrow keys to move</li>
                <li>Use your sample-gathering tools ([SPACE]) when you're near some scrap to harvest it and return it to your collection.</li>
                <li>Use your shield ([SHIFT]) to protect yourself from dangerous microstorms.</li>
                <li>Return to your shelter before daylight runs out to shield yourself from the night cold.</li>

            </ul>

            <h2 class="title">About</h2>

            <p>This game was developed with the theme for <a href="https://ldjam.com/events/ludum-dare/41" target="_blank" rel="noopener noreferrer">Ludum Dare 48</a>, "Mix 2 Incompatible Genres," in mind.</p>

            <p>The source code is available <a href="https://github.com/safrmo/ludum-dare-41" target="_blank" rel="noopener noreferrer">here</a> as a proof-of-concept for developing games with Vue and SVG.</p>

            <button class="play-button" @click="$store.commit('SHOW_INSTRUCTIONS', false)">Play!</button>

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
        overflow-y: auto;

        & > *:first-child {
            margin-top: 0;
        }
        .play-button {
            background-color: $white;
            color: $black;
            padding: 20px;
            border: 2px dashed $white;

            &:hover,
            &:focus {
                background-color: $black;
                color: $white;
            }
        }
    }

    .title {
        font-size: 28px;
        padding-bottom: 5px;
        border-bottom: 2px solid;
    }
}
</style>
