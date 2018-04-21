<template>

    <section class="trivia">

        <h3 class="title">Authentication</h3>

        <div class="question-wrap" v-if="!$store.state.triviaLocked">
            <p class="question" v-html="cmpQuestion.question"/>
            <button
                v-for="(answer, i) in cmpAnswers"
                v-html="answer"
                @click="answerClicked(answer)"/>
        </div>

        <div v-else class="lock-wrap">
            <span class="locked">Locked</span>
            <span class="time-left">Time Left: {{ cmpTimeLeft }}</span>
        </div>

    </section>

</template>

<script>
import trivia from '@/assets/trivia'

export default {
    data() {
        return {
            currentIndex: 0,
            trivia,
            timeLeft: 0,
            interval: null
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

            // set timer
            this.$store.commit('LOCK_TRIVIA')
            this.timeLeft = 30
            this.interval = setInterval(this.decrementTimer, 100)
        },
        decrementTimer() {
            if (this.timeLeft > 0) {
                this.timeLeft -= 0.1
            } else {
                this.$store.commit('UNLOCK_TRIVIA')
                clearInterval(this.interval)
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
        },
        cmpTimeLeft() {
            return Math.abs(this.timeLeft).toFixed(1)
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
    .lock-wrap {
        margin: 10px;

        .locked {
            display: block;
            text-align: center;
        }
        .time-left {
            display: block;
            text-align: center;
        }
    }
}
</style>
