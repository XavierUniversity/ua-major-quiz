<template>
  <Majors title="Lofty Thinking" description="Good Point! Explore similar complexities of the human experience with one of these illustrious majors" :majors="[
    {
      major: 'Classical Humanities',
      link: '#'
    },
    {
      major: 'Classics',
      link: '#'
    },
    {
      major: 'Mathematics',
      link: '#'
    },
    {
      major: 'Philosophy',
      link: '#'
    },
    {
      major: 'Theology',
      link: '#'
    },
    {
      major: 'Philosophy, Politics and the Public',
      link: '#'
    },
    {
      major: 'Honors Bachelor of Arts',
      link: '#'
    },
    {
      major: 'University Scholars',
      link: '#'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'LoftyThinking',
  components: {
    Majors
  }
}
</script>
