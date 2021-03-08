<template>
  <Majors title="Art"  :majors="[{
      major: 'Graphic Design',
      link: '/graphic-design/'
    },
    {
      major: 'Music Performance',
      link: '/music-performance/'
    },
    {
      major: 'Music Education',
      link: '/music-education/'
    },
    {
      major: 'Theatre',
      link: '/theatre/'
    },
    {
      major: 'Theatre Education',
      link: '/theatre-education/'
    },
    {
      major: 'Art',
      link: '/art/'
    },
    {
      major: 'Fine Arts',
      link: '/fine-arts/'
    },
    {
      major: 'Classical Humanities',
      link: '/classical-humanities/'
    }]" />
  <Disclaimer />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
import Disclaimer from '@/components/Disclaimer.vue'
export default {
  name: 'Art',
  components: {
    Majors,
    Disclaimer
  }
}
</script>