<template>
  <div class="quiz">
    <Home />
  </div>
</template>

<script setup>

import Home from '@/views/Home.vue';
</script>

<style lang="scss">
.quiz {
  background-color: #0C2340;
  background-image: url('~@/assets/quiz-background.webp');
  background-size: cover;
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
</style>