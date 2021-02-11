<template>
  <div>
    <Question question="Cleanliness is next to Godliness. Here's a Pop Quiz: Is the element vanadium a metal or a gas?" v-bind:buttons="[{
      answer: 'Metal',
      location: 'Needles'
    },
    {
      answer: 'Gas',
      location: 'Communication'
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Cleanliness',
  components: {
    Question
  }
}
</script>
