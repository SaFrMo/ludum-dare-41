<template>
    <div id="app" v-full-height.min>
        <router-view/>
    </div>
</template>

<script>
import { autoBlur } from 'auto-blur'
export default {
    name: 'App',
    mounted() {
        autoBlur()
    }
}
</script>

<style lang="scss">
@import 'src/styles/vars';
@import 'src/styles/base';
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

#app {
    background-color: $black;
    color: $white;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    font-family: $font-family;
}
</style>
