<template>
  <Majors title="People (Past and Present)"  :majors="[
    {
      major: 'History',
      link: '/history/'
    },
    {
      major: 'International Studies',
      link: '/international-studies/'
    },
    {
      major: 'Modern Language and International Economics',
      link: '/modern-language-and-international-economics/'
    },
    {
      major: 'Criminal Justice',
      link: '/criminal-justice/'
    },
    {
      major: 'Political Science',
      link: '/political-science/'
    },
    {
      major: 'Gender and Diversity Studies',
      link: '/gender-and-diversity-studies/'
    },
    {
      major: 'Pre-Law',
      link: '/pre-law/'
    },
    {
      major: 'Social Work',
      link: '/social-work/'
    },
    {
      major: 'Sociology',
      link: '/sociology/'
    },
    {
      major: 'Classical Humanities',
      link: '/classical-humanities/'
    },
    {
      major: 'Classics',
      link: '/classics/'
    },
    {
      major: 'International Studies',
      link: '/international-studies/'
    },
    {
      major: 'Theology',
      link: '/theology/'
    }]" />
    <Disclaimer />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
import Disclaimer from '@/components/Disclaimer.vue'
export default {
  name: 'People',
  components: {
    Majors,
    Disclaimer
  }
}
</script>