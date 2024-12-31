import ProjecsLayout from '@/modules/projects/layouts/ProjecsLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjecsLayout,
    },
  ],
});

export default router;
