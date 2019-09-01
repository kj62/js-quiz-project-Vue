<template>
  <div v-bind:class="{'takeTest': true, 'font-decreased': isAppBoxWidthSmall}" ref="takeTest">
    <div v-if="!isTestCompleted" class='test-question-container'>
        <transition-group name="questions" mode="out-in">
            <p class="question-item" v-for="(question, index) in fetchDataArray.questions" v-bind:key="index" v-if="index === currentQuestionIndex">
                {{fetchDataArray.questions[currentQuestionIndex].question}}
            </p>
        </transition-group>
    </div>
    <div v-if="!isTestCompleted  && fetchDataArray.questions" class='answers-container'>
        <div class='answer-item' v-on:click="nextQuestion(0)">
            <p class='item-letter'>A</p>
            <p class='item-answer-text'>{{fetchDataArray.questions[currentQuestionIndex].answers[0]}}</p>
        </div>
        <div class='answer-item' v-on:click="nextQuestion(1)">
            <p class='item-letter'>B</p>
            <p class='item-answer-text'>{{fetchDataArray.questions[currentQuestionIndex].answers[1]}}</p>
        </div>
        <div class='answer-item' v-on:click="nextQuestion(2)">
            <p class='item-letter'>C</p>
            <p class='item-answer-text'>{{fetchDataArray.questions[currentQuestionIndex].answers[2]}}</p>
        </div>
        <div class='answer-item' v-on:click="nextQuestion(3)">
            <p class='item-letter'>D</p>
            <p class='item-answer-text'>{{fetchDataArray.questions[currentQuestionIndex].answers[3]}}</p>
        </div>
    </div>
    <div v-if="isTestCompleted && fetchDataArray.questions" class='answers-container'>
        <div class='test-finished-box'>
            <p class='test-finished-message'>{{testFinishedMessage}}{{correctAnswersCounter}}/{{maxScore}}</p>
            <router-link to="/takeTest">
                <div type='button' class='retake-test-btn' v-on:click="retakeTestHandler">
                    {{retakeTest}}
                </div>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const dataUrl = '/static/js-questions.json';

export default {
    name: 'TakeTest',
    data () {
        return {
            appBoxSize: {
                width: 0,
                appBoxWidthFlag: 0
            },
            testCompleted: false,
            testFinishedMessage: "Congratulations! You have finished the test! Your score is: ",
            buttonBackText: "Go back to Home",
            retakeTest: "Retake test",
            currentQuestionIndex: 0,
            correctAnswerIndex: 0,
            correctAnswersCounter: 0,
            maxScore: 10,
            fetchDataArray: []
        }
    },
    methods: {
        getAppBoxWidth: function($event) {
            this.appBoxSize.width = this.$refs['takeTest'].clientWidth;   
            if(this.appBoxSize.width <= 750) {
                this.appBoxSize.appBoxWidthFlag = 1;
            }
            else{
                this.appBoxSize.appBoxWidthFlag = 0;
            }
        },
        nextQuestion: function(selectedAnswerIndex) {
            if(!this.fetchDataArray.questions || undefined == this.fetchDataArray.questions[this.currentQuestionIndex] ||
                undefined == this.fetchDataArray.questions[this.currentQuestionIndex + 1]){
                this.testCompleted = true;
                this.currentQuestionIndex = 0;
                return;
            }
            if(this.fetchDataArray.questions[this.currentQuestionIndex].correctAnswerIndex == selectedAnswerIndex
                && undefined != this.fetchDataArray.questions[this.currentQuestionIndex]) {
                this.correctAnswersCounter += 1;
                this.testCompleted = false;
            }
            this.currentQuestionIndex += 1;
        },
        getQuestionsAndAnswers: function(url) {
            axios.get(url)
                .then(
                    (response) => {
                        this.fetchDataArray = response.data;
                        console.log(this.fetchDataArray);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        },
        retakeTestHandler: function() {
            this.testCompleted = false;
            this.currentQuestionIndex = 0;
            this.correctAnswersCounter = 0;
        }
    },
    created() {
        this.getQuestionsAndAnswers(dataUrl);
    },
    computed: {
        isAppBoxWidthSmall: function() {
            if(this.appBoxSize.appBoxWidthFlag == 1){
                return true;
            }
            return false;
        },
        isTestCompleted: function() {
            if(this.testCompleted) {
                this.currentQuestionIndex = 0;
                return true;
            }
            return false;
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.getAppBoxWidth);
            //Init
            this.getAppBoxWidth();
        });
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getAppBoxWidth);
    }
}
</script>

<style lang='scss' scope>
    @import "TakeTest.scss";
</style>