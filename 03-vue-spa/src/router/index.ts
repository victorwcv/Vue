import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import isAuthenticated from '@/modules/auth/guards/authGard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // landing
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
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
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticated],
          props: (route) => {
            const id = +route.params.id;
            return isNaN(id) ? { id: 1 } : { id };
          },
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
      ],
    },

    // Auth
    {
      path: '/auth',
      name: 'auth',
      redirect: '/auth/login',
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // Not found
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404,
    },
  ],
});

export default router;
