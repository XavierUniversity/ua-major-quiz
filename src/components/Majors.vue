<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="major in majors" :key="major.major">
        <a :href="'https://www.xavier.edu'+major.link">{{ major.major }}</a>
      </li>
    </ul>
    <router-link to="/" class="btn btn--inline">Restart the quiz &raquo;</router-link>
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
ul{
  text-align: left;
  margin-top: 0;
  @media screen and (min-width: 768px ){
    column-count: 2;  
    vertical-align: top;
  }
}
</style>