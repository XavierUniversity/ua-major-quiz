import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// Import all of the questions
// Import the majors
import Art from '@/views/Majors/Art.vue'
import Business from '@/views/Majors/Business.vue'
import Communication from '@/views/Majors/Communication.vue'
import Education from '@/views/Majors/Education.vue'
import Health from '@/views/Majors/Health.vue'
import People from '@/views/Majors/People.vue'
import Science from '@/views/Majors/Science.vue'
import Technology from '@/views/Majors/Technology.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/majors/art',
    name: 'Art',
    component: Art
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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router