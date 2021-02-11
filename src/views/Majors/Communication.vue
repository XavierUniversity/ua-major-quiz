<template>

  <Majors title="Communication" description="Hmm. Not so hot on your chemistry. But did you know vanadium was named for the Scandinavian goddess of beauty? Study foreign languages, your native tongue and other forms of expression with" :majors="[
    {
      major: 'English',
      link: '#'
    },
    {
      major: 'French',
      link: '#'
    },
    {
      major: 'German',
      link: '#'
    },
    {
      major: 'Communication Studies',
      link: '#'
    },
    {
      major: 'Public Relations',
      link: '#'
    },
    {
      major: 'Spanish',
      link: '#'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'Communication',
  components: {
    Majors
  }
}
</script>

