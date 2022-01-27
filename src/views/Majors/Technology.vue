<template>
  <Majors title="Technology"  :majors="[
    {
      major: 'Biophysics',
      link: '/biophysics/',
      description: 'Explore principles in physics that describe patterns seen in biological systems.'
    },
    {
      major: 'Computer Science',
      link: '/computer-science/',
      description: 'Gain an understanding of computer processes and algorithms.'
    },
    {
      major: 'Radiologic Technology and MRI',
      link: '/radiologic-technology/',
      description: 'Learn how to produce quality images of human tissues, organs, bones and vessels using imaging equipment.'
    }
  ]" />
  <Disclaimer />
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