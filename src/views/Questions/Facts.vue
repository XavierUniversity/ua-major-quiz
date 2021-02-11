<template>
  <div>
    <Question question="Did you enjoy telling people this fact?" v-bind:buttons="[{
      answer: 'Yes',
      location: 'Education'
    },
    {
      answer: 'No',
      location: 'Science'
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Facts',
  components: {
    Question
  }
}
</script>
