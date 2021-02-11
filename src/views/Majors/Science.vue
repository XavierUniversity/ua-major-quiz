<template>
  <Majors title="Science" description="You knew better than to expose your nerdiness. Surround yourself with like-minded brainiacs in the fabulous field of" :majors="[
    {
      major: 'Biology',
      link: '#'
    },
    {
      major: 'Biophysics',
      link: '#'
    },
    {
      major: 'Chemistry',
      link: '#'
    },
    {
      major: 'Environmental Science',
      link: '#'
    },
    {
      major: 'Life Sciences for Business',
      link: '#'
    },
    {
      major: 'Natural Sciences',
      link: '#'
    },
    {
      major: 'Physics',
      link: '#'
    },
    {
      major: 'Applied Physics',
      link: '#'
    },
    {
      major: 'Sustainability',
      link: '#'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'Science',
  components: {
    Majors
  }
}
</script>
