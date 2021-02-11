<template>
  <div>
    <Question question="Did you wash up afterwards?" v-bind:buttons="[{
      answer: 'Yes',
      location: 'Cleanliness'
    },
    {
      answer: 'No',
      location: 'Creative'
    },
    {
      answer: 'Soap, Schmope',
      location: 'People' 
    }]" />
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Wash',
  components: {
    Question
  }
}
</script>
