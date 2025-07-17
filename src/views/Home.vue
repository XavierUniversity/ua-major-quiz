<template>
  <div class="quiz__content" v-if="questionIndex > quiz.length">
    <h2 class="quiz__content">Find Your Major</h2>
    <p class="quiz__content">Learn what areas of study might be a good fit for you.</p>
    <button v-on:click="start" class="btn btn--secondary btn--inline">
      Take the Quiz
    </button>
    {{ questionMap }}
  </div>
  <div class="quiz__q" v-else>
    <div class="progress" v-if="progress <= 100">
      <div class="progress" style="border-color: #0c2340; background-color: #0c2340; margin: 0; color: white;"
        :style="{ width: progress + '%' }">
      </div>
    </div>
    <div v-for="(question, index) in quiz" :key="index">
      <div v-if="index === questionIndex">
        <h2 class="question">{{ question.Question }}</h2>
        <ol>
          <li v-for="answer in question.Answers" :key="answer.Answer">
            <label>
              <input type="radio" v-bind:value="answer.Category" v-bind:name="index"
                v-model="userResponses[index]" /><span v-html="answer.Answer"></span>
            </label>
          </li>
        </ol>
        <hr />
        <!-- The navigation buttons! -->
        <button v-if="questionIndex > 0" v-on:click="prev" class="btn btn--inline btn--prev">
          &laquo; Previous
        </button>
        <button v-if="questionIndex <= quiz.length - 2" v-on:click="next" class="btn btn--next btn--inline">
          Next &raquo;
        </button>
        <button v-if="questionIndex == quiz.length - 1" v-on:click="score" class="btn btn--inline btn--final">
          Show my Major &raquo;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from "@/store/QuizStore";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref, reactive } from "vue";
import XuBreadCrumb from "@/components/XuBreadCrumb.vue";

import { isEmpty } from "@/assets/js/utility.js";


const buckets = ref([
  'Health',
  'Business',
  'Communication',
  'Science',
  'Education',
  'Technology',
  'Art',
  'People'
]);

const questionIndex = ref(0);
const progress = ref(0);


const quizStore = useQuizStore();

const { questionMap } = storeToRefs(quizStore);


onBeforeMount(async () => {


  await quizStore.fetchQuestions(); s


})





</script>

<style lang="scss" scoped>
.quiz {
  &__content {
    color: white;
  }
}

.btn {
  &--secondary {
    background: #007DB3;
    color: white;

    &:hover,
    &:focus,
    &:active {
      background: darken(#007DB3, 10%);
    }
  }

  &--prev,
  &--next {
    width: 137px;
  }

  &--next,
  &--final {
    float: right;
  }
}

.progress {
  width: 100%;
  background-color: #e8e8e8;
  border-collapse: collapse;
  border: 0.25rem solid #f8f8f8;
  margin: 1rem auto 2rem;
  transition: width 500ms;
  border-radius: 1rem;
}

.quiz-container {
  background: #f3f3f3;
  padding: 2rem;
  border-radius: 1.5rem;
}

hr {
  height: 0.25rem;
  background: #bbb;
  margin: 2rem 0;
  display: block;
}

h2.question {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;

  @media (min-width:992px) {
    text-align: center;
  }
}

ol {
  text-align: left;
  list-style-type: none;
  padding: 0;
  margin: 1rem 0 0;

  li {
    margin: 0;
    padding: 0;
  }

  label {
    display: block;
    background: #fff;
    padding: 1.5rem 2rem;
    margin: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(black, 0.25);
    transition: background 250ms ease;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
}

input[type='radio'] {
  margin-right: 0.75rem;
}
</style>