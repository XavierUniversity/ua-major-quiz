<template>
  <Majors title="Education"  :majors="[
    {
      major: 'Early Childhood',
      link: '/early-childhood-education/'
    },
    {
      major: 'Middle Childhood',
      link: '/middle-childhood-education/'
    },
    {
      major: 'Secondary Education',
      link: '/secondary-education/'
    },
    {
      major: 'Montessori',
      link: '/montessori/'
    },
    {
      major: 'Music Education',
      link: '/music-education/'
    },
    {
      major: 'Special Education',
      link: '/special-education/'
    },
    {
      major: 'Theatre Education',
      link: '/theatre-education/'
    }]" />
    <Disclaimer />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
import Disclaimer from '@/components/Disclaimer.vue'
export default {
  name: 'Education',
  components: {
    Majors,
    Disclaimer
  }
}
</script>