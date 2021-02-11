<template>
  <div class="hello">
    <p>{{ description }}&hellip;</p>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="major in majors" :key="major">
        <a :href="major.link" target="_blank">{{ major.major }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Majors',
  props: {
    title: String,
    description: String,
    majors: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
</style>
