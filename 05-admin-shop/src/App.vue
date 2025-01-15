<template>
  <RouterView />
  <VueQueryDevtools />
</template>

<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { useAuthStore } from './modules/auth/stores/auth.store';
import { AuthStatus } from './modules/auth/types';
import { useRoute, useRouter } from 'vue-router';

const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();

authStore.$subscribe((_, state) => {
  if( state.authStatus === AuthStatus.checking ) {
    authStore.checkAuthStatus();
    return;
  }

  if (route.path.includes('/auth') && state.authStatus === AuthStatus.authenticated) {
    router.replace({ name: 'home' });
    return;
  }




},{
  immediate: true
});
</script>
