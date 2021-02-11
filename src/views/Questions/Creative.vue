<template>
  <div>
    <Question question="A creative type! Was Salvador Dali a Luhca Libre fighter or a Spanish Surrealist?" v-bind:buttons="[{
      answer: 'Surrealist',
      location: 'Arts'
    },
    {
      answer: 'Lucha',
      location: 'Business'
    },
    {
      answer: 'Is there a difference?',
      location: 'LoftyThinking' 
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Creative',
  components: {
    Question
  }
}
</script>
