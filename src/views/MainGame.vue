<template>

    <main class="main-game" v-full-height.min>

        <game-map/>

        <side-bar v-if="$store.state.sidebarOpened"/>

    </main>

</template>

<style lang="scss">
main.main-game {
}
</style>
