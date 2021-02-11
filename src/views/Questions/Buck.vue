<template>
  <div>
    <Question question="Buck up. People are dying!" v-bind:buttons="[{
      answer: 'Okay!',
      location: 'Health'
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Buck',
  components: {
    Question
  }
}
</script>
