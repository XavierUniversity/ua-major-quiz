<template>
  <div>
    <Question question="Was it because you knew there are 5 billion rhizobacteria in a teaspoon of soil?" v-bind:buttons="[{
      answer: 'Yes!',
      location: 'Facts'
    },
    {
      answer: 'Huh?',
      location: 'Programming'
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Rhizobacteria',
  components: {
    Question
  }
}
</script>
