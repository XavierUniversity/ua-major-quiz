<template>
  <Spacer size="64" />
  <h2 v-if="title">{{ title }}</h2>
  <p v-if="description">{{ description }}</p>
</template>

<script>
import Spacer from '@/components/Spacer.vue'

export default {
  name: 'Intro',
  components: {
    Spacer
  },
  props: {
    title: String,
    description: String
  }
}
</script>

<style></style>
