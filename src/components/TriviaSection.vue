<template>

    <section class="trivia">

        <h3 class="title">Authentication</h3>

        <div class="question-wrap">
            Question?
        </div>

    </section>

</template>

<script>
</script>

<style lang="scss">
@import 'src/styles/vars';

section.trivia {
    margin: 0 $desktop-padding;
    border: 2px solid $white;
    $trivia-padding: #{$desktop-padding / 2};

    .title {
        margin: 0;
        padding: $trivia-padding;
        background-color: $white;
        color: $black;
    }
    .question-wrap {
        padding: $trivia-padding;
    }
}
</style>
