<template>
  <Majors title="Arts" description="Yes! Follow his lead with" :majors="[
    {
      major: 'Advertising',
      link: '#'
    },
    {
      major: 'Art',
      link: '#'
    },
    {
      major: 'Digital Innovation, Film and Television',
      link: '#'
    },
    {
      major: 'Fine Arts',
      link: '#'
    },
    {
      major: 'Graphic Design',
      link: '#'
    },
    {
      major: 'Music',
      link: '#'
    },
    {
      major: 'Music Education',
      link: '#'
    },
    {
      major: 'Theatre',
      link: '#'
    }
    ]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'Arts',
  components: {
    Majors
  }
}
</script>
