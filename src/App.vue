<template>
  <div class="quiz">
    <Home />
  </div>
</template>

<script setup>

import Home from '@/views/Home.vue';
</script>

<style lang="scss">
@font-face {
  font-family: "neuemontreal";
  src: url("https://www.xavier.edu/_V6/_assets/fonts/ppneuemontreal-regular.woff2") format("woff2"), url("https://www.xavier.edu/_V6/_assets/fonts/ppneuemontreal-regular.woff") format("woff");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "neuemontreal";
  src: url("https://www.xavier.edu/_V6/_assets/fonts/ppneuemontreal-bold_x.woff2") format("woff2"), url("https://www.xavier.edu/_V6/_assets/fonts/ppneuemontreal-bold_x.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

html {
  font-family: "neuemontreal", "Helvetica Neue", Helvetica, Arial, sans-serif !important;

}

.quiz {
  background-color: #0C2340;
  background-image: url('@/assets/quiz-background.webp');
  background-size: cover fixed;
  background-repeat: repeat-y;

  text-align: center;
  padding: 5.5rem 0.5rem;
  min-height: 100vh;
  flex-direction: column;
  margin: auto 0;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__q {
    background: #f8f8f8;
    width: 100%;
    text-align: left;
    padding: 1rem;
    border-radius: 1.5rem;

    @media (min-width: 992px) {
      width: 60%;
      padding: 3.5rem 7rem;
    }
  }
}


.start-over {
  position: fixed;
  bottom: 24px;
  left: 24px;
  border: solid 2px #0c2340;
  color: #0c2340;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: bold;
  transition: all 250ms ease;

  &:hover {
    background: #0c2340;
    color: white;
  }
}

button {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  overflow-y: scroll;
  /* All browsers without overlaying scrollbars */
  -webkit-text-size-adjust: 100%;
  /* Prevent adjustments of font size after orientation changes in iOS */
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

*,
::before,
::after {
  background-repeat: no-repeat;
  /* Set `background-repeat: no-repeat` to all elements and pseudo elements */
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit;
  /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
  vertical-align: inherit;
}

* {
  padding: 0;
  /* Reset `padding` and `margin` of all elements */
  margin: 0;
}

.content-page__breadcrumbs {
  display: none;
}

h1 {
  display: none;
}

.contentpage__main {
  padding: 0px !important;
}

.hero{
  display: none !important;
}
</style>