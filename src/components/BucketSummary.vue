<template>
  <div>
    <p>Based on your answers, we recommend that you explore:</p>
    <ul v-for="major in majors" :key="major.MajorID">
      <li>
        <a class="select-box__link" :href="major.link">{{ major.name }}</a>
      </li>
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
      color: #61abe8;
    }

    color: #1a1aff;

  }

  p {
    font-size: 1rem;
    line-height: 1.65;
    text-align: left;
  }
}
</style>