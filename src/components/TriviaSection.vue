<template>

    <section class="trivia">

        <h3 class="title">Authentication</h3>

        <div class="question-wrap" v-if="!$store.state.triviaLocked">
            <p class="question" v-html="cmpQuestion.question"/>
            <button
                v-for="(answer, i) in cmpAnswers"
                v-html="answer"
                class="answer"
                @click="answerClicked(answer)"/>
        </div>

        <div v-else class="lock-wrap">
            <div class="result" >
                <h4 v-if="lastCorrect" class="correct heading">Correct!</h4>
                <h4 v-else class="wrong heading">Wrong!</h4>

                <div class="secondary">
                    <div class="bonus" v-if="lastCorrect">

                        <div class="boost-wrap" v-if="!boostPicked">
                            <h5>Choose a skill to improve:</h5>
                            <button @click="boost('speed')">Speed</button>
                            <button @click="boost('carry weight')">Carry Weight</button>
                            <button @click="boost('attack power')">Attack Power</button>
                        </div>

                        <div class="boost-summary" v-else>
                            Max {{ boostPicked }} increased!
                        </div>
                    </div>

                    <p>Question: <span v-html="cmpQuestion.question"/></p>
                    <p>Answer: <span v-html="cmpQuestion.correct_answer"/></p>
                </div>
            </div>

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
            interval: null,
            lastCorrect: null,
            boostPicked: false
        }
    },
    methods: {
        newQuestion() {
            this.currentIndex = Math.floor(Math.random() * this.trivia.length)
        },
        answerClicked(answer) {
            if (this.cmpQuestion.correct_answer == answer) {
                this.lastCorrect = true
                this.boostPicked = false
            } else {
                this.lastCorrect = false
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
                //this.newQuestion()
                this.$store.commit('UNLOCK_TRIVIA')
                clearInterval(this.interval)
            }
        },
        boost(skill) {
            console.log(skill)

            this.boostPicked = skill
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

    // title
    .title {
        margin: 0;
        padding: $trivia-padding;
        background-color: $white;
        color: $black;
    }

    // question
    .question-wrap {
        padding: $trivia-padding;
    }

    // answer
    .answer {
        display: block;
        width: 100%;
        padding: 10px;
        border: 2px solid transparent;

        &:hover,
        &:focus {
            border: 2px dotted;
        }
    }

    // lock
    .lock-wrap {
        .heading {
            text-align: center;
            margin: 0 0 10px;
            padding: 10px;
        }
        .correct.heading {
            background-color: $green;
        }
        .wrong.heading {
            background-color: $red;
        }
        .secondary {
            margin: 0 10px 20px;
        }

        // boost
        .boost-wrap {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 30px;

            h5 {
                margin: 10px 0 20px;
                text-align: center;
                font-size: 1em;
                width: 100%;
            }
            button {
                background-color: $white;
                color: $black;
                width: calc(100% / 3);
                padding: 5px;
                box-sizing: border-box;
                border: 2px dotted $black;

                &:hover,
                &:focus {
                    background-color: $black;
                    color: $white;
                    border: 2px dotted $white;
                }
            }
        }

        // timer to unlock
        .locked {
            margin: 0 10px 10px;
            display: block;
            text-align: center;
        }
        .time-left {
            display: block;
            margin: 0 10px 10px;
            text-align: center;
        }
    }
}
</style>
