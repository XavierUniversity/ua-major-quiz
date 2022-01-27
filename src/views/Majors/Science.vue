<template>
  <Majors title="Science"  :majors="[
    {
      major: 'Biology',
      link: '/biology/',
      description: 'Biology is the basis for many science-based careers from medicine to lab research.'
    },
    {
      major: 'Biophysics',
      link: '/biophysics/',
      description: 'Explore principles in physics that describe patterns seen in biological systems.'
    },
    {
      major: 'Chemistry',
      link: '/chemistry/',
      description: 'Study analytical, biochemistry, inorganic, organic, and physical chemistry.'
    },
    {
      major: 'Environmental Science',
      link: '/environmental-science/',
      description: 'Take steps toward solving environmental problems to help make the world a more sustainable place.'
    },
    {
      major: 'Life Sciences for Business',
      link: '/life-sciences-for-business/',
      description: 'Prepare for leadership in the Biotech industry by combining a bachelor of science with a Xavier MBA.'
    },
    {
      major: 'Physics',
      link: '/physics/',
      description: 'Work in labs designed for experiments in electronics, holography, quantum optics, nuclear physics and more.'
    },
    {
      major: 'Applied Physics',
      link: '/applied-physics/',
      description: 'Explore the universe on a large scale all the way down to the sub-atomic level.'
    },
    {
      major: 'Engineering Physics',
      link: '/engineering-physics/',
      description: 'Discover how natural science and engineering come together.'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'Science',
  components: {
    Majors,
  }
}
</script>