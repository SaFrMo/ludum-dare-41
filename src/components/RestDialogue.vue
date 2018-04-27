<template>

    <section class="rest-dialogue">

        <h2 class="question">Rest for the night?</h2>

        <div class="choice-wrap">
            <button @click="$store.commit('START_REST')">Yes</button>
            <button @click="$store.commit('SHOW_REST_DIALOGUE', false)">No</button>
        </div>

    </section>

</template>

<style lang="scss">
@import 'src/styles/vars';

section.rest-dialogue {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 250px;
    height: 150px;
    margin: auto;
    background-color: $black;
    border: 2px solid $white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;

    .question {
        margin-top: 0;
    }
    .choice-wrap {
        display: flex;
        justify-content: space-between;

        button {
            width: calc(50% - 10px);
            background-color: $white;
            color: $black;
            border: 2px solid transparent;
            padding: 10px;
            font-size: 18px;

            &:hover,
            &:focus {
                background-color: $black;
                color: $white;
                border: 2px solid $white;
            }
        }
    }
}
</style>
