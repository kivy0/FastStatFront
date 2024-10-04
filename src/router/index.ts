import { createRouter, createWebHistory } from 'vue-router'
import TaskInfoPage from "@/pages/TaskInfoPage.vue";
import AnalyticsPage from "@/pages/AnalyticsPage.vue";
import MainPage from "@/pages/MainPage.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/analytics',
      name: 'AnalyticsPage',
      component: AnalyticsPage,
    },
    {
      path: '/task-info',
      name: 'TaskInfoPage',
      component: TaskInfoPage,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ]
})

export default router
