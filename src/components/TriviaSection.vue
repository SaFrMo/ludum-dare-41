<template>

    <section class="trivia">

        <h3 class="title">Authentication</h3>

        <div class="question-wrap">
            <p class="question" v-html="cmpQuestion.question"/>
            <button
                v-for="(answer, i) in cmpAnswers"
                v-html="answer"
                @click="answerClicked(answer)"/>
        </div>

    </section>

</template>

<script>
import trivia from '@/assets/trivia'

export default {
    data() {
        return {
            currentIndex: 0,
            trivia
        }
    },
    methods: {
        newQuestion() {
            this.currentIndex = Math.floor(Math.random() * this.trivia.length)
        },
        answerClicked(answer) {
            if (this.cmpQuestion.correct_answer == answer) {
                console.log('correct')
            }
        }
    },
    computed: {
        cmpQuestion() {
            return this.trivia[this.currentIndex]
        },
        cmpAnswers() {
            return [
                ...this.cmpQuestion.incorrect_answers,
                this.cmpQuestion.correct_answer
            ]
                .sort()
                .reverse()
        }
    }
}
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
