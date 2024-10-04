import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './pages/MainPage.vue'

import AnalyticsPage from './pages/AnalyticsPage.vue'
import TaskInfoPage from './pages/TaskInfoPage.vue'
import NotFound from './pages/NotFound.vue';

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
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
