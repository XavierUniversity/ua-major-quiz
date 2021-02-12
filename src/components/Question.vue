<template>
  <div class="hello">
    <h1>{{ question }}</h1>
    
    <Answers :buttons="buttons" />
    
  </div>
</template>

<script>
import Answers from '@/components/Answers.vue'

export default {
  name: 'Question',
  components: {
    Answers
  },
  props: {
    question: String,
    buttons: Array,
    getBlock: Function
  },
  methods: {
    navigate(route) {
      this.$router.push({ name: route });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
