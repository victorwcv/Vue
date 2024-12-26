import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
    },
    {
      path: '/pricing',
      name: 'pricingtures',
      component: () => import('@/modules/landing/pages/PricingPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modules/landing/pages/ContactPage.vue'),
    },
  ],
});

export default router;
