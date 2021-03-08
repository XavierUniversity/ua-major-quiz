<template>
  <Majors title="Communication"  :majors="[
    {
      major: 'English',
      link: '/english/'
    },
    {
      major: 'Communication Studies',
      link: '/communication-studies'
    },
    {
      major: 'Deaf Studies',
      link: '/cml/deaf-studies/'
    },
    {
      major: 'Digital Media',
      link: '/digital-media/'
    },
    {
      major: 'Marketing',
      link: '/marketing/'
    },
    {
      major: 'Advertising',
      link: '/advertising/'
    },
    {
      major: 'Public Relations',
      link: '/public-relations/'
    },
    {
      major: 'French',
      link: '/french/'
    },
    {
      major: 'German',
      link: '/german/'
    },
    {
      major: 'Spanish',
      link: '/spanish/'
    }]" />
  <Disclaimer />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
import Disclaimer from '@/components/Disclaimer.vue'
export default {
  name: 'Communication',
  components: {
    Majors,
    Disclaimer
  }
}
</script>