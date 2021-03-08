<template>
  <Majors title="Health"  :majors="[{
      major: 'Exercise Science',
      link: '/exercise-science/'
    },
    {
      major: 'Health Services Administration',
      link: '/health-services-administration/'
    },
    {
      major: 'Nursing',
      link: '/nursing/'
    },
    {
      major: 'Psychology',
      link: '/psychology/'
    },
    {
      major: 'Pre-Dental',
      link: '/pre-dental/'
    },
    {
      major: 'Pre-Medicine',
      link: '/pre-medicine/'
    },
    {
      major: 'Pre-Pharmacy',
      link: '/pre-pharmacy/'
    },
    {
      major: 'Radiologic Technology and MRI',
      link: '/radiologic-technology/index'
    }]" />
    
    <Disclaimer />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
import Disclaimer from '@/components/Disclaimer.vue'
export default {
  name: 'Health',
  components: {
    Majors,
    Disclaimer
  }
}
</script>