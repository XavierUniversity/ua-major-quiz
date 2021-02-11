<template>
  <div>
    <p>Unsure of what to study? You're not alone. Answer these harmless questions and we'll direct you to a subject you may find interesting.</p>
    <Question question="Did you play in dirt as a kid?" v-bind:buttons="[
    {
      answer: 'Yes',
      location: 'Wash'
    },
    {
      answer: 'No',
      location: 'Rhizobacteria'
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Home',
  components: {
    Question
  }
}
</script>
