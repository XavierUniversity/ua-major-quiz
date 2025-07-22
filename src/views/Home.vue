<template>
  <div class="quiz__content" v-if="activePhase === 'intro'">
    <h2 class="quiz__content">Find Your Major</h2>
    <p class="quiz__content">Learn what areas of study might be a good fit for you.</p>
    <button v-on:click="start" class="btn btn--secondary btn--inline">
      Take the Quiz
    </button>
  </div>

  <div class="quiz__q" v-if="activePhase === 'form'">
    <v-form v-model="isResponseValid" @submit.prevent="initialize()">
      <v-text-field label="First Name" v-model="firstName" :rules="[rules.empty()]"></v-text-field>
      <v-text-field label="Last Name" v-model="lastName" :rules="[rules.empty()]"></v-text-field>

      <v-text-field label="Email" v-model="email" :rules="[rules.empty()]"></v-text-field>
      <v-date-input v-model="birthdate" validate-on-blur :rules="[rules.empty()]"
        label="Student's Birthhdate"></v-date-input>


      <v-radio-group v-model="quizMode" :rules="[rules.empty()]">
        <v-radio value="certain" label="Yes, I’m certain!"></v-radio>
        <v-radio value="explore" label="I think so, but I’m open to exploring."></v-radio>
        <v-radio value="quiz" label="I’m still figuring it out."></v-radio>
      </v-radio-group>

      <v-autocomplete :rules="[rules.empty()]" v-if="(quizMode == 'certain' || quizMode == 'explore')"
        label="Select Major" v-model="selectedMajor" item-title="Name" item-value="ID"
        :items="majorsMap"></v-autocomplete>

      <button type="submit" class="btn btn--secondary btn--inline">
        {{ quizMode !== 'certain' ? 'Take the Quiz' : 'Generate Major Report' }}
      </button>

    </v-form>


  </div>


  <div class="quiz__q" v-if="activePhase === 'quiz'">
    <div class="progress" v-if="progress <= 100">
      <div class="progress" style="border-color: #0c2340; background-color: #0c2340; margin: 0; color: white;"
        :style="{ width: progress + '%' }">
      </div>
    </div>
    <div v-for="(question, index) in questionMap" :key="index">
      <div v-if="index === questionIndex">
        <h2 class="question">{{ question.Question }}</h2>
        <v-radio-group v-model="userResponses[question.QuestionID]">
          <v-radio v-for="(answer, index) in question.Answers" :value="answer.ID" :label="answer.Text"></v-radio>
        </v-radio-group>

        <hr />
        <!-- The navigation buttons! -->
        <button v-if="questionIndex > 0" v-on:click="prev" class="btn btn--inline btn--prev">
          &laquo; Previous
        </button>
        <button v-if="questionIndex <= questionMap.length - 2" v-on:click="next" class="btn btn--next btn--inline">
          Next &raquo;
        </button>
        <button v-if="questionIndex == questionMap.length - 1" v-on:click="score" class="btn btn--inline btn--final">
          Show my Major &raquo;
        </button>
      </div>
    </div>
  </div>


  <div class="quiz__q" v-if="activePhase === 'resultGroup'">
    <ReportLoader :mode="quizMode"> </ReportLoader>
    <BucketSummary @restart="restartQuiz()" :title="outcome.name" :majors="outcomeMajors"></BucketSummary>
  </div>

  <div  v-if="activePhase === 'resultMajor'" class="quiz__q">
    <ReportLoader :mode="quizMode"> </ReportLoader>
    {{ majorsMap[selectedMajor] }}
  </div>
</template>

<script setup>
import { useQuizStore } from "@/store/QuizStore";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref, computed } from "vue";

import BucketSummary from '@/components/BucketSummary.vue';

import rules from "@/assets/js/rules";


const phases = ref([
  'intro',
  'form',
  'quiz',
  'resultGroup',
  'resultMajor',
]);


const activePhase = ref("intro");
const questionIndex = ref(-1);
const userResponses = ref([]);
const selectedMajor = ref("");
const isResponseValid = ref(false);

const firstName = ref("");
const lastName = ref("");

const email = ref("");
const birthdate = ref("");
const quizMode = ref("intro");



const quizStore = useQuizStore();

const { questionMap, outcome, majorsMap, outcomeMajors } = storeToRefs(quizStore);

onBeforeMount(async () => {
  await quizStore.fetchQuestions();
  await quizStore.fetchMajors();

})

function start() {
  questionIndex.value = 0;
  activePhase.value = "form"
}

function restartQuiz() {
  questionIndex.value = 0;
  userResponses.value = [];
  activePhase.value = "quiz"
}

async function initialize() {


  if (isResponseValid.value) {

    let sendData = { name: firstName.value + ' ' + lastName.value, email: email.value, birthdate: birthdate.value, major: selectedMajor.value };

    await quizStore.setInstance(sendData);

    if (quizMode.value == "certain") {
      activePhase.value = "resultMajor"
    } else {
      activePhase.value = "quiz"
    }
  }

}

function next() {
  questionIndex.value++;
}

function prev() {
  questionIndex.value--;
}

async function score() {
  await quizStore.postResults(userResponses.value);
  await quizStore.getOutcomeDetails(outcome.value.ID);
  activePhase.value = "resultGroup";
}

const progress = computed(() => {
  return ((questionIndex.value) / questionMap.value.length) * 100
});

</script>

<style lang="scss" scoped>
.quiz {
  &__content {
    color: white;
  }
}

.btn {
  &--secondary {
    background: #1a1aff;
    color: white;

    &:hover,
    &:focus,
    &:active {
      background: darken(#1a1aff, 10%);
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