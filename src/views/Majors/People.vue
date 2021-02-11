<template>
  <Majors title="People (Past and Present)" description="Because Genghis Khan didn't and he conquered half the known world while riding a horse. Learn who else chose world domination over personal hygiene by studying" :majors="[
    {
      major: 'History',
      link: '#'
    },
    {
      major: 'International Studies',
      link: '#'
    },
    {
      major: 'Modern Language and International Economics',
      link: '#'
    },
    {
      major: 'Philopsophy, Politics and the Public',
      link: '#'
    },
    {
      major: 'Criminal Justice',
      link: '#'
    },
    {
      major: 'Political Science',
      link: '#'
    },
    {
      major: 'Gender and Diversity Studies',
      link: '#'
    },
    {
      major: 'Pre-Law',
      link: '#'
    },
    {
      major: 'Social Work',
      link: '#'
    },
    {
      major: 'Sociology',
      link: '#'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'People',
  components: {
    Majors
  }
}
</script>
