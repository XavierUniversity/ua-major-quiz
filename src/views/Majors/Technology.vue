<template>
  <Majors title="Technology"  :majors="[
    {
      major: 'Biophysics',
      link: '/biophysics/'
    },
    {
      major: 'Computer Science',
      link: '/computer-science/'
    },
    {
      major: 'Information Systems',
      link: '/information-systems/'
    },
    {
      major: 'Radiologic Technology and MRI',
      link: '/radiologic-technology/'
    }
  ]" />
  <Disclaimer />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
import Disclaimer from '@/components/Disclaimer.vue'
export default {
  name: 'Technology',
  components: {
    Majors,
    Disclaimer
  }
}
</script>