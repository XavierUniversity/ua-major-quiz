<template>
  <Majors title="Health"  :majors="[{
      major: 'Exercise Science',
      link: '/exercise-science/',
      description: 'Help people live healthier lives through exercise, rehabilitation and nutrition.'
    },
    {
      major: 'Health Services Administration',
      link: '/health-services-administration/',
      description: 'Learn how to handle the critical jobs in information systems, finance and marketing for hospitals.'
    },
    {
      major: 'Nursing',
      link: '/nursing/',
      description: 'Become a skilled, well trained nurse in a program that connects you to professionals across the city and nation.'
    },
    {
      major: 'Psychology',
      link: '/psychology/',
      description: 'Gain a better understanding of human behavior.'
    },
    {
      major: 'Pre-Professional Health',
      link: '/pre-professional-health/',
      description: 'Learn a holistic approach to healthcare that\'s focused on a patient\'s overall health and wellness.'
    },
    {
      major: 'Radiologic Technology and MRI',
      link: '/radiologic-technology/index',
      description: 'Learn how to produce quality images of human tissues, organs, bones and vessels using imaging equipment.'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
export default {
  name: 'Health',
  components: {
    Majors
  }
}
</script>