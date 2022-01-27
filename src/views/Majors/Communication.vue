<template>
  <Majors title="Communication"  :majors="[
    {
      major: 'English',
      link: '/english/',
      description: 'Explore publishing, marketing, journalism and web content management.'
    },
    {
      major: 'Communication Studies',
      link: '/communication-studies',
      description: 'Bring people together through public speaking, internal communications and theory.'
    },
    {
      major: 'Digital Media',
      link: '/digital-media/',
      description: 'Have what it takes to go viral?'
    },
    {
      major: 'Marketing',
      link: '/marketing/',
      description: 'Master the world of marketing, from sales and advertising to research and brand management.'
    },
    {
      major: 'Advertising',
      link: '/advertising/',
      description: 'Dive into the realm of creative brainstorming, digital media and market research.'
    },
    {
      major: 'Public Relations',
      link: '/public-relations/',
      description: 'Become a pro at event planning and communicating on behalf of companies.'
    },
    {
      major: 'French and Francophone Studies',
      link: '/french/',
      description: 'Learn more about declaring the French major at Xavier.'
    },
    {
      major: 'German',
      link: '/german/',
      description: 'Master the German language through reading, writing and speaking.'
    },
    {
      major: 'Spanish',
      link: '/spanish/',
      description: 'Get a passport to the world through reading, writing, speaking and experiencing the Spanish language.'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'
export default {
  name: 'Communication',
  components: {
    Majors,
  }
}
</script>