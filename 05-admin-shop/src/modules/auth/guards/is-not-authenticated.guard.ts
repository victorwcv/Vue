import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
import { AuthStatus } from '../types';

const isNotAuthenticated = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  await authStore.checkAuthStatus();

  if (authStore.authStatus === AuthStatus.authenticated) {
    next({
      name: 'home',
    });
  } else {
    next();
  }
};

export default isNotAuthenticated;
