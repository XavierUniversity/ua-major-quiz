<template>
  <Majors title="Business"  :majors="[
    {
      major: 'Accountancy',
      link: '/accountancy/'
    },
    {
      major: 'Actuarial Science',
      link: '/actuarial-science/'
    },
    {
      major: 'Economics',
      link: '/economics/'
    },
    {
      major: 'Entrepreneurial Studies',
      link: '/entrepreneurial-studies/'
    },
    {
      major: 'Finance',
      link: '/finance/'
    },
    {
      major: 'Information Systems',
      link: '/information-systems/'
    },
    {
      major: 'International Business',
      link: '/international-business/'
    },
    {
      major: 'International Studies',
      link: '/international-studies/'
    },
    {
      major: 'Management',
      link: '/management/'
    },
    {
      major: 'Marketing',
      link: '/marketing/'
    },
    {
      major: 'Human Resources',
      link: '/human-resources/'
    },
    {
      major: 'Sport Marketing',
      link: '/sport-marketing/'
    },
    {
      major: 'Sport Management',
      link: '/sport-management/'
    },
    {
      major: 'Advertising',
      link: '/advertising/'
    },
    {
      major: 'Sustainability: Economics and Management',
      link: '/sustainability-economics-and-management/'
    }]" />
  <Disclaimer />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
import Disclaimer from '@/components/Disclaimer.vue'
export default {
  name: 'Business',
  components: {
    Majors,
    Disclaimer
  }
}
</script>