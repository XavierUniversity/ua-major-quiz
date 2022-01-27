<template>
  <Majors title="Education"  :majors="[
    {
      major: 'Early Childhood',
      link: '/early-childhood-education/',
      description: 'Gain the skills needed to shape the lives of children in preschool through third grade.'
    },
    {
      major: 'Middle Childhood',
      link: '/middle-childhood-education/',
      description: 'Specialize in social studies, math, science or reading while developing the skills needed to teach grades 4-9.'
    },
    {
      major: 'Secondary Education',
      link: '/secondary-education/',
      description: 'Learn more about the undergraduate Secondary Education program at Xavier.'
    },
    {
      major: 'Montessori',
      link: '/montessori/',
      description: 'Learn what it takes to be a Montessori educator.'
    },
    {
      major: 'Music Education',
      link: '/music-education/',
      description: 'Graduate with the licensure needed to teach music for ages 3-21.'
    },
    {
      major: 'Special Education',
      link: '/special-education/',
      description: 'Gain the skills needed to shape the lives of children in as an intervention specialist.'
    },
    {
      major: 'Theatre Education',
      link: '/theatre-education/',
      description: 'Combine theatre classes with courses to receive your license to teach theatre to grades PK - 12.'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
export default {
  name: 'Education',
  components: {
    Majors,
  }
}
</script>