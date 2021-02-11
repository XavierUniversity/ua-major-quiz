<template>
  <Majors title="Technology" description="You're what makes the world go round. Or at least that swirling beach ball of death when a computer is crashing. Save us from ourselves by studying" :majors="[
    {
      major: 'Biophysics',
      link: '#'
    },
    {
      major: 'Computer Science',
      link: '#'
    },
    {
      major: 'Digital Innovation, Film and Television',
      link: '#'
    },
    {
      major: 'Information Systems',
      link: '#'
    },
    {
      major: 'Radiologic Technology and MRI',
      link: '#'
    }
  ]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'Technology',
  components: {
    Majors
  }
}
</script>
