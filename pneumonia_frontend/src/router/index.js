import { createRouter, createWebHistory } from 'vue-router'
import ChestXrayDetection from '../components/ChestXrayDetection.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChestXrayDetection
    },

  ]
})

export default router
