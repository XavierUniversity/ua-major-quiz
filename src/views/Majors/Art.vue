<template>
  <Majors title="Art"  :majors="[{
      major: 'Graphic Design',
      link: '/graphic-design/',
      description: 'Study art, technology and marketing to succeed as a creative designer.'
    },
    {
      major: 'Music Performance',
      link: '/music-performance/',
      description: 'Explore music theory, music history, pedagogy, esthetics and music education.'
    },
    {
      major: 'Music Education',
      link: '/music-education/',
      description: 'Graduate with the licensure needed to teach music for ages 3-21.'
    },
    {
      major: 'Theatre',
      link: '/theatre/',
      description: 'Study performance, stagecraft, directing and writing.'
    },
    {
      major: 'Theatre Education',
      link: '/theatre-education/',
      description: 'Combine theatre classes with courses to receive your license to teach theatre to grades PK - 12.'
    },
    {
      major: 'Art',
      link: '/art/',
      description: 'Perfect your craft—whether it\'s printmaking, ceramics, photography or fiber arts.'
    },
    {
      major: 'Classical Humanities',
      link: '/classical-humanities/',
      description: 'Explore Latin and Greek culture, including courses in Classical art, history and more.'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
export default {
  name: 'Art',
  components: {
    Majors
  }
}
</script>