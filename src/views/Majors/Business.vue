<template>
  <Majors title="Business" description="Nope! You may not be an artist, but you can always be a patron of the arts. For that, you'll need money! Tr these majors" :majors="[
    {
      major: 'Accountancy',
      link: '#'
    },
    {
      major: 'Actuarial Science',
      link: '#'
    },
    {
      major: 'Economics',
      link: '#'
    },
    {
      major: 'Entrepreneurial Studies',
      link: '#'
    },
    {
      major: 'Finance',
      link: '#'
    },
    {
      major: 'Information Systems',
      link: '#'
    },
    {
      major: 'International Business',
      link: '#'
    },
    {
      major: 'Management',
      link: '#'
    },
    {
      major: 'Marketing',
      link: '#'
    },
    {
      major: 'Human Resources',
      link: '#'
    },
    {
      major: 'Sport Marketing',
      link: '#'
    },
    {
      major: 'Sport Management',
      link: '#'
    },
    {
      major: 'Advertising',
      link: '#'
    },
    {
      major: 'Sustainability Economics and Management',
      link: '#'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'Business',
  components: {
    Majors
  }
}
</script>
