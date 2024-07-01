import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './pages/MainPage.vue'

import AnalyticsPage from './pages/AnalyticsPage.vue'
import TaskInfoPage from './pages/TaskInfoPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/analytics',
    name: 'AnalyticsPage',
    component: AnalyticsPage
  },
  {
    path: '/task-info',
    name: 'TaskInfoPage',
    component: TaskInfoPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
