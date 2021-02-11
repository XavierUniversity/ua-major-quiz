<template>
  <div>
    <Question question="Rock on! Are you afraid of needles?" v-bind:buttons="[{
      answer: 'No',
      location: 'Health'
    },
    {
      answer: 'Yes',
      location: 'Buck'
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Needles',
  components: {
    Question
  }
}
</script>
