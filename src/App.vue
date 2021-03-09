<template>
  <Hero title="Major Quiz" image="https://www.xavier.edu/major-quiz/images/major_quiz-bg.jpg" />
  <div class="wrapper">
    <div class="content">
      <router-view/>
    </div>
  </div>
  <Spacer size="64" />
</template>

<script>
import Hero from '@/components/Hero.vue'
import Spacer from '@/components/Spacer.vue'
export default {
  components: {
    Hero,
    Spacer
  }
}

</script>

<style lang="scss">
.content {
  text-align: center;
  justify-content: center;
  align-self: center;
  @media screen and (min-width: 992px){
    width: 60%;
    margin: 0 auto;
    padding: 1rem;
  }  
}
.start-over{
  position: fixed;
  bottom: 24px;
  left: 24px;
  border: solid 2px #0c2340;
  color: #0c2340;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: bold;
  transition: all 250ms ease;
  &:hover{
    background: #0c2340; 
    color: white;
  }
}

button{
  cursor: pointer;
}

ol{
  text-align: left;
  list-style-type: upper-alpha;
}
li {
  padding: 0.5rem 0;
}
input[type='radio']{
  margin-right: 0.75rem;
}
</style>