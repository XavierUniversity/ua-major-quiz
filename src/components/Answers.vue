<template>
  <button v-for="button in buttons" :key="button" @click="navigate(button.structuredDataNodes[1].blockId)">
    {{ button.structuredDataNodes[0].text }}
  </button>
</template>

<script>
export default {
  name: 'Answers',
  props: {
    buttons: Array,
    getBlock: Function
  },
  methods: {
    navigate(route) {
      this.$parent.$parent.getBlock(route);
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


