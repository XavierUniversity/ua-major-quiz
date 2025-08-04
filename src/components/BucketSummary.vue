<template>
  <div>
    <p>Based on your answers, we recommend&hellip;</p>
    <h2>{{ title }}</h2>
    <ul v-for="major in majors" :key="major.MajorID">
      <div>
        <h3><a class="select-box__link" :href="major.link">{{ major.name }}</a></h3>
        <p v-if="major.description">{{ major.description }} </p>
      </div>
    </ul>

  </div>
</template>

<script setup>


import { defineProps } from "vue";


const { title, description, majors } = defineProps({
  title: String,
  description: String,
  majors: Array
})







</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  text-align: left;
  margin-top: 0;


}

h2 {
  margin: 0 0 2rem;
  padding: 0;
  font-size: 2.4rem;

  @media (min-width: 992px) {
    text-align: center;
  }
}


.select-box {
  &__link {

    &:hover,
    &:focus,
    &:active {
      color: #1a1aff;
    }

    color: #0C2340;
  }

  p {
    font-size: 1rem;
    line-height: 1.65;
    text-align: left;
  }
}
</style>