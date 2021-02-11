<template>
  <div>
    <Question question="You must have had something else on your mind. Was it network infrastructure and programming?" v-bind:buttons="[{
      answer: 'Yes',
      location: 'Technology'
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Programming',
  components: {
    Question
  }
}
</script>
