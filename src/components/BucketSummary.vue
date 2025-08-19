<template>
  <div>
    <p>Based on your answers, we recommend that you explore the following majors:</p>
    <v-row>
      <v-chip-group class="chip-group" column>
        <v-chip v-for="major in majors" color="#1a1aff" :key="major.MajorID" :href="major.link" variant="outlined">
          {{ major.name }}
        </v-chip>
      </v-chip-group>
    </v-row>


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


.chip-group {
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 50px;
  margin-top: 30px;

}
.v-chip__content{
  font-weight: 200;
}
.v-chip {
  border-width: 2px;
  border-color: #1a1aff;
  padding: 18px 24px !important;
  font-weight: 200;
  color:black;
  font-size: 16px;


  &:hover {
    background-color: #1a1aff;
    color: white;
  }

}
</style>