import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// Import all of the questions
import Buck from '@/views/Questions/Buck.vue'
import Cleanliness from '@/views/Questions/Cleanliness.vue'
import Creative from '@/views/Questions/Creative.vue'
import Facts from '@/views/Questions/Facts.vue'
import Needles from '@/views/Questions/Needles.vue'
import Programming from '@/views/Questions/Programming.vue'
import Rhizobacteria from '@/views/Questions/Rhizobacteria.vue'
import Wash from '@/views/Questions/Wash.vue'
// Import the majors
import Arts from '@/views/Majors/Arts.vue'
import Business from '@/views/Majors/Business.vue'
import Communication from '@/views/Majors/Communication.vue'
import Education from '@/views/Majors/Education.vue'
import Health from '@/views/Majors/Health.vue'
import LoftyThinking from '@/views/Majors/LoftyThinking.vue'
import People from '@/views/Majors/People.vue'
import Science from '@/views/Majors/Science.vue'
import Technology from '@/views/Majors/Technology.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { hideRestart: true }
  },
  {
    path: '/',
    name: 'Buck',
    component: Buck
  },
  {
    path: '/',
    name: 'Cleanliness',
    component: Cleanliness
  },
  {
    path: '/',
    name: 'Creative',
    component: Creative
  },
  {
    path: '/',
    name: 'Facts',
    component: Facts
  },
  {
    path: '/',
    name: 'Needles',
    component: Needles
  },
  {
    path: '/',
    name: 'Programming',
    component: Programming
  },
  {
    path: '/',
    name: 'Rhizobacteria',
    component: Rhizobacteria
  },
  {
    path: '/',
    name: 'Wash',
    component: Wash
  },
  {
    path: '/majors/arts',
    name: 'Arts',
    component: Arts
  },
  {
    path: '/majors/business',
    name: 'Business',
    component: Business
  },
  {
    path: '/majors/communication',
    name: 'Communication',
    component: Communication
  },
  {
    path: '/majors/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/majors/health',
    name: 'Health',
    component: Health
  },
  {
    path: '/majors/loftythinking',
    name: 'LoftyThinking',
    component: LoftyThinking
  },
  {
    path: '/majors/People',
    name: 'People',
    component: People
  },
  {
    path: '/majors/Science',
    name: 'Science',
    component: Science
  },
  {
    path: '/majors/technology',
    name: 'Technology',
    component: Technology
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
