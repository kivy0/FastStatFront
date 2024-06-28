import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './pages/MainPage.vue'
import LoginPage from './pages/LoginPage.vue'
import AnalyticsPage from './pages/AnalyticsPage.vue'
import TaskInfoPage from './pages/TaskInfoPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
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
