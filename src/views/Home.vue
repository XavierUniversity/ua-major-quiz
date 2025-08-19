<template>
  <div class="quiz__content" v-if="activePhase === 'intro'">
    <h2 class="quiz__content">Find Your Fit</h2>
    <p class="quiz__content">Generate your personalized major plan from Xavier University.</p>
    <v-btn @click="start" class="x-btn">
      Take the Quiz
    </v-btn>
  </div>

  <div class="quiz__q" v-if="activePhase === 'form'">
    <h2>Find Your Major</h2>

    <v-form v-model="isResponseValid" @submit.prevent="initialize()">
      <v-text-field label="First Name" v-model="firstName" :rules="[rules.empty()]"></v-text-field>
      <v-text-field label="Last Name" v-model="lastName" :rules="[rules.empty()]"></v-text-field>

      <v-text-field label="Email" v-model="email" :rules="[rules.empty()]"></v-text-field>
      <v-date-input v-model="birthdate" validate-on-blur :year="startYear" :rules="[rules.empty()]" label="Birthdate"></v-date-input>

      <h3>What year will you graduate high school?</h3>
      <v-radio-group v-model="gradYear" :rules="[rules.empty()]">
        <v-radio value="2026" label="2026"></v-radio>
        <v-radio value="2027" label="2027"></v-radio>
        <v-radio value="2028" label="2028"></v-radio>
        <v-radio value="2029" label="2029"></v-radio>
      </v-radio-group>

      <h3>Do you know what Major you want to study?</h3>
      <v-radio-group v-model="quizMode" :rules="[rules.empty()]">
        <v-radio value="certain" label="Yes, I’m certain!"></v-radio>
        <v-radio value="explore" label="I think so, but I’m open to exploring."></v-radio>
        <v-radio value="quiz" label="I’m still figuring it out."></v-radio>
      </v-radio-group>

      <h3 v-if="quizMode === 'explore'" class="mb-5">What Major are you considering?</h3>

      <v-autocomplete :rules="[rules.empty()]" v-if="(quizMode == 'certain' || quizMode == 'explore')"
        label="Select Major" v-model="selectedMajor" item-title="Name" item-value="ID"
        :items="filteredMajors"></v-autocomplete>

      <v-btn type="submit" class="x-btn">
        {{ quizMode !== 'certain' ? 'Take the Quiz' : 'Generate Major Report' }}
      </v-btn>

    </v-form>


  </div>

  <div class="quiz__q" v-if="activePhase === 'loader' || activePhase === 'generate'">
    <h2 v-if="activePhase == 'loader'">Let's get to know you a little better.</h2>
    <h2 v-else>Generating Your Results.</h2>

    <br />
    <br />

    <v-progress-linear color="#1a1aff" striped height="10" v-model="loaderTimer"></v-progress-linear>

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

          <v-radio class="radio-card" v-for="(answer, index) in question.Answers" @click="delayedNext()"
            :value="answer.ID" :label="answer.Text"></v-radio>

        </v-radio-group>

        <hr />
        <!-- The navigation buttons! -->
        <v-btn v-if="questionIndex > 0" @click="prev" class="x-btn">
          &laquo; Previous
        </v-btn>
     
      </div>
    </div>
  </div>


  <div class="quiz__q" v-if="activePhase === 'result'">
    <ReportLoader @restart="restartQuiz()" :mode="quizMode"> </ReportLoader>
  </div>

</template>

<script setup>
import { useQuizStore } from "@/store/QuizStore";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref, computed } from "vue";
import ReportLoader from "@/components/ReportLoader.vue";

import rules from "@/assets/js/rules";


// PHASES
//   'intro',
//   'form',
//   'loader'
//   'quiz',
//   'generate',
//   'result',
// 

const filteredMajors = computed(() => {
  let final = [];
  majorsMap.value.forEach((major, index) => {
    let temp = { ID: index, Name: major.Name }
    final.push(temp);
  });
  return final

})


const activePhase = ref("intro");
const questionIndex = ref(-1);
const userResponses = ref([]);
const selectedMajor = ref("");
const isResponseValid = ref(false);

const firstName = ref("");
const lastName = ref("");

const email = ref("");

const startYear = ref(new Date().getFullYear()-16);

const birthdate = ref("");
const gradYear = ref("");
const quizMode = ref("intro");

const quizStore = useQuizStore();


const loaderTimer = ref(0);

const { questionMap, outcome, majorsMap } = storeToRefs(quizStore);

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
function incrementTimer() {
  loaderTimer.value += 5;
  if (loaderTimer.value < 100) {
    setTimeout(() => {
      incrementTimer()
    }, 75);
  } else {
    if (activePhase.value == 'loader') {
      activePhase.value = "quiz"

    } else {
      activePhase.value = "result"
    }
  }
}



async function initialize() {

  if (isResponseValid.value) {

    let sendData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      birthdate: birthdate.value,
      major: selectedMajor.value,
      gradYear: gradYear.value
    };

    await quizStore.setInstance(sendData);
    if (["certain", "explore"].includes(quizMode.value)) {
      quizStore.setSelectedMajorID(selectedMajor.value);
    }
    loaderTimer.value = 0

    if (quizMode.value == "certain") {
      activePhase.value = "generate"
    } else {
      activePhase.value = "loader"
     
    }

    incrementTimer();


    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}

function next() {
  questionIndex.value++;
}

const preventRadioSelect = ref(false);
function delayedNext() {
  if (preventRadioSelect.value) {
    return;
  }
  preventRadioSelect.value = true;
  setTimeout(() => {
    preventRadioSelect.value = false;
    if (questionIndex.value >= questionMap.value.length - 1) {
      score();
    } else {
      next();

    }
  }, 150)
}

function prev() {
  questionIndex.value--;
}

async function score() {
  await quizStore.postResults(userResponses.value);
  await quizStore.getOutcomeDetails(outcome.value.ID);
  loaderTimer.value = 0
  activePhase.value = "generate";
  incrementTimer();

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

.x-btn {
  background: #1a1aff;
  border-color: #1a1aff;
  color: white;
  border-radius: 0px;
}

.next {
  float: right;

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


.radio-card {
  :deep(.v-label) {
    width: 100% !important;
  }

  &:hover,
  &:focus {
    background: darken(white, 5%);
  }

}

input[type='radio'] {
  margin-right: 0.75rem;
}

hr{
  border-color: white;
}
</style>