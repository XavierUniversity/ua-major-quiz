<template>
  <Majors title="People (Past and Present)"  :majors="[
    {
      major: 'History',
      link: '/history/',
      description: 'Study events, people and ideas of the past.'
    },
    {
      major: 'International Studies',
      link: '/international-studies/',
      description: 'Discover new world views and learn to assess international trends.'
    },
    {
      major: 'Modern Language and International Economics',
      link: '/modern-language-and-international-economics/',
      description: 'Gain skills to address international economic issues and work in the global arena.'
    },
    {
      major: 'Criminal Justice',
      link: '/criminal-justice/',
      description: 'Tap into the real-world excitement of law enforcement, crime scene investigation and constitutional law.'
    },
    {
      major: 'Political Science',
      link: '/political-science/',
      description: 'Learn firsthand about the practice of government and politics.'
    },
    {
      major: 'Gender and Diversity Studies',
      link: '/gender-and-diversity-studies/',
      description: 'Examine privilege, peace, justice, identity and awareness in our modern world.'
    },
    {
      major: 'Pre-Law',
      link: '/pre-law/',
      description: 'Develop the verbal, written and analytical skills needed to succeed in law school.'
    },
    {
      major: 'Social Work',
      link: '/social-work/',
      description: 'Empower individuals and communities by connecting them with resources and advocating for social change.'
    },
    {
      major: 'Sociology',
      link: '/sociology/',
      description: 'Study social behavior, cultural diversity, inequality, and social change.'
    },
    {
      major: 'Classical Humanities',
      link: '/classical-humanities/',
      description: 'Explore Latin and Greek culture, including courses in Classical art, history and more.'
    },
    {
      major: 'Classics',
      link: '/classics/',
      description: 'Study Greek and Roman mythology, art and archaeology.'
    },
    {
      major: 'Theology',
      link: '/theology/',
      description: 'Embrace humanity\'s experience of God and discover how it\'s expressed through doctrines and rituals.'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
export default {
  name: 'People',
  components: {
    Majors,
  }
}
</script>