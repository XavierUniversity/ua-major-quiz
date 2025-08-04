<template>
  <div>
    <p>Based on your answers, we recommend&hellip;</p>
    <h2>{{ title }}</h2>
    <v-div>
      <div v-for="major in majors" :key="major.MajorID">
        <div>
          <h3><a class="select-box__link" :href="major.link">{{ major.name }}</a></h3>
          <p v-if="major.description">{{ major.description }} </p>
        </div>
      </div>
    </v-div>

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

  @media screen and (min-width: 768px) {
    column-count: 2;
    vertical-align: top;
  }
}

h2 {
  margin: 0 0 2rem;
  padding: 0;
  font-size: 2.4rem;

  @media (min-width: 992px) {
    text-align: center;
  }
}

p {
  color: #0C2340;
  font-size: 1.8rem;
  margin: 0;

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
  }

  p {
    font-size: 1rem;
    line-height: 1.65;
    text-align: left;
  }
}
</style>