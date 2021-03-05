<template>
  <router-view/>
</template>

<style lang="scss">
body{
  background: url('https://www.xavier.edu/images/heroes/homepage_visit_2x.jpg');
  height: 100vh;
  width: 100vw;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgba(#0c2340, 0.85);  
  justify-content: center;
  align-self: center;
  color: white;
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
.nav{
  background: transparent;
  border: solid 2px white;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  margin: 0.75rem;
  width: 150px;
  transition: background 250ms ease, color 250ms ease;
  &:hover{
    color: #0c2340;
    background: white;
  }
}
a{
  color: white;
  font-weight: 500;
  &:hover, &:focus{
    text-decoration: none;
  }
}
</style>
