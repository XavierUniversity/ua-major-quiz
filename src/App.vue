<template>
  <h1>Major Decisions</h1>
  <router-view/>
  
  <router-link :to="{ name: 'Home' }" class="start-over" v-if="!$route.meta.hideRestart">Start Over</router-link>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
