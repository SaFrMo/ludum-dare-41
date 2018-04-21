<template>

    <ul class="error-wrap">
        <li class="error" v-for="(error, i) in $store.state.errors">
            <span class="text">{{ error }}</span>
            <button
                class="close"
                @click="$store.commit('SPLICE_ERROR', i)"
                aria-label="close error">
                X
            </button>
        </li>
    </ul>

</template>

<style lang="scss">
@import 'src/styles/vars';
$dark-red: darken($red, 20%);

ul.error-wrap {
    padding-left: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    top: 20px;
    left: 20px;

    .error {
        background-color: $dark-red;
        padding: 10px;
        border: 5px solid $red;
        max-width: 300px;
        line-height: 1.4;
        position: relative;
    }
    .close {
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: calc(100% + 5px);
        padding: 10px;
        background-color: $dark-red;

        &:hover,
        &:focus {
            background-color: $white;
            color: $black;
        }
    }
}
</style>
