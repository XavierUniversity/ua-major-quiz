<template>
  <Majors title="Education" description="Millions of kids are playing in the dir right now! Help them help themselves by becoming a teacher" :majors="[
    {
      major: 'Early Childhood',
      link: '#'
    },
    {
      major: 'Middle Childhood',
      link: '#'
    },
    {
      major: 'Montessori',
      link: '#'
    },
    {
      major: 'Music Education',
      link: '#'
    },
    {
      major: 'Special Education',
      link: '#'
    },
    {
      major: 'Teaching Sciences',
      link: '#'
    },
    {
      major: 'Theatre Education',
      link: '#'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'Education',
  components: {
    Majors
  }
}
</script>
