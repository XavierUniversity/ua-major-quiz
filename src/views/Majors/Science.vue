<template>
  <Majors title="Science"  :majors="[
    {
      major: 'Biology',
      link: '/biology/'
    },
    {
      major: 'Biophysics',
      link: '/biophysics/'
    },
    {
      major: 'Chemistry',
      link: '/chemistry/'
    },
    {
      major: 'Environmental Science',
      link: '/environmental-science/'
    },
    {
      major: 'Life Sciences for Business',
      link: '/life-sciences-for-business/'
    },
    {
      major: 'Physics',
      link: '/physics/'
    },
    {
      major: 'Applied Physics',
      link: '/applied-physics/'
    },
    {
      major: 'Engineering Physics',
      link: '/engineering-physics/'
    }]" />
    <Disclaimer />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
import Disclaimer from '@/components/Disclaimer.vue'

export default {
  name: 'Science',
  components: {
    Majors,
    Disclaimer
  }
}
</script>