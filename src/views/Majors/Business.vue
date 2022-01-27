<template>
  <Majors title="Business"  :majors="[
    {
      major: 'Accounting',
      link: '/accounting/',
      description: 'Measure, process and communicate financial information for companies and corporations.'
    },
    {
      major: 'Actuarial Science',
      link: '/actuarial-science/',
      description: 'Study economics, finance and statistics to graduate eligible for the nation\'s highest-paying jobs.'
    },
    {
      major: 'Economics',
      link: '/economics/',
      description: 'Study how wealth, goods and services affect the world and its economies.'
    },
    {
      major: 'Entrepreneurial Studies',
      link: '/entrepreneurial-studies/',
      description: 'Learn to use new ideas and innovations to solve problems.'
    },
    {
      major: 'Finance',
      link: '/finance/',
      description: 'Discover the techniques for making effective financial decisions for indidivuals and companies.'
    },
    {
      major: 'International Business',
      link: '/international-business/',
      description: 'Gain a foundation in international business principles and practices within world trade and economies.'
    },
    {
      major: 'International Studies',
      link: '/international-studies/',
      description: 'Discover new world views and learn to assess international trends.'
    },
    {
      major: 'Management',
      link: '/management/',
      description: 'Master the techniques it takes to guide a team to greatness.'
    },
    {
      major: 'Marketing',
      link: '/marketing/',
      description: 'Master the world of marketing, from sales and advertising to research and brand management.'
    },
    {
      major: 'Sport Marketing',
      link: '/sport-marketing/',
      description: 'Gain experience through organizing, budgeting and evaluating official sports organizations.'
    },
    {
      major: 'Sport Management',
      link: '/sport-management/',
      description: 'Explore the world of sport marketing, from PR to advertising, digital media and more.'
    },
    {
      major: 'Advertising',
      link: '/adv/',
      description: 'Dive into the realm of creative brainstorming, digital media and market research.'
    }]" />
</template>

<script>
// @ is an alias to /src
import Majors from '@/components/Majors.vue'

export default {
  name: 'Business',
  components: {
    Majors,
  }
}
</script>