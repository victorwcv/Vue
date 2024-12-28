import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

const isAuthenticated = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
) => {
  const userId = localStorage.getItem('userID');
  localStorage.setItem('lastPath', to.path);

  if (!userId) {
    return next({
      name: 'auth',
    });
  }

  return next();
};

export default isAuthenticated;
