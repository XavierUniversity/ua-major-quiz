<template>
   <div class="home">
     <p>Unsure of what to study? You're not alone. Answer these harmless questions and we'll direct you to a subject you may find interesting.</p>
     <Question question="What core class sounds the most exciting to you?" v-bind:buttons="[
     {
       answer: 'History 103 (Immigration to America)',
       category: ['people']
     },
     {
       answer: 'English 101 (Composition)',
       category: ['communication', 'science']
     },
     {
       answer: 'Biology 102 (Human Biology)',
       category: ['health']
     },
     {
       answer: 'Theatre 100 (Intro to Theatre)',
       category: ['art']
     }
     ]" />
   </div>
 </template>

 <script>
 // @ is an alias to /src
 import Question from '@/components/Question.vue'

 export default {
   name: 'Home',
   components: {
     Question
   },
   data(){
     return {
       cats: []
     }
   }
 }
 </script>