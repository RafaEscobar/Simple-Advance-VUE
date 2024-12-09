import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/form-view',
      name: 'formview',
      component: () => import('../views/FormView.vue'),
    },
    {
      path: '/chart-view',
      name: 'chartview',
      component: () => import('../views/ChartView.vue'),
    },
  ],
})

export default router
