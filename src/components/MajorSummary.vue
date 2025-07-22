<template>
    <div>
      <p>Based on your answers, we recommend&hellip;</p>
      <h2>{{ title }}</h2>
      <div class="select-box cta-card__2x1">
        <div class="select-box__container" v-for="major in majors" :key="major.MajorID">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 8 99" preserveAspectRatio="xMidYMid slice"
            style="position:absolute;width:8px;height:100%;" version="1.1" viewBox="0 0 8 99" x="0px" xml:space="preserve"
            y="0px">
            <rect fill="#007DB3" height="33" width="8" y="33"></rect>
          </svg>
          <div class="select-box__container--content">
            <h3><a class="select-box__link" :href="'https://www.xavier.edu' + major.link">{{ major.name }}</a></h3>
            <p v-if="major.description">{{ major.description }} </p>
          </div>
        </div>
      </div>
      <div class="text--center" style="text-align: center;">
        <button @click="restart()" class="btn btn--inline" style="margin: 2.5rem 0 0;">Restart the quiz &raquo;</button>
      </div>
      <Disclaimer />
    </div>
  </template>
  
  <script setup>
  
  import Disclaimer from '@/components/Disclaimer.vue';
  
  
  import { defineProps, defineEmits } from "vue";
  
  
  const { title, description, majors } = defineProps({
    title: String,
    description: String,
    majors: Array
  })
  
  
  
  
  const emit = defineEmits(["restart"]);
  
  
  
  function restart() {
    // got to quiz phase
  
    emit("restart");
  }
  
  
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
        color: #09c;
      }
    }
  
    p {
      font-size: 1rem;
      line-height: 1.65;
      text-align: left;
    }
  }
  </style>