import isAdminGuard from '@/modules/auth/guards/is-admin.guard';
import isAuthenticated from '@/modules/auth/guards/is-authenticated.guard';
import type { RouteRecordRaw } from 'vue-router';

export const adminRoutes: RouteRecordRaw = {
  path: '/admin',
  name: 'admin',
  beforeEnter: [isAuthenticated, isAdminGuard],
  component: () => import('@/modules/admin/layouts/AdminLayout.vue'),
  children: [],
};
