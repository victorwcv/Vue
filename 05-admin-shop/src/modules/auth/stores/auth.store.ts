import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { AuthStatus, type User } from '@/modules/auth/types';
import { loginAction } from '../actions';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.checking);
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await loginAction(email, password);

      if (!loginResp.ok) {
        logout();
        return false;
      }

      user.value = loginResp.user;
      token.value = loginResp.token;
      authStatus.value = AuthStatus.authenticated;

      return true;
    } catch (error) {
      console.log(error);
      return logout();
    }
  };

  const logout = () => {
    authStatus.value = AuthStatus.notAuthenticated;
    token.value = null;
    user.value = null;
    return false;
  };

  return {
    user,
    token,
    authStatus,

    // Getters
    isChecking: computed(() => authStatus.value === AuthStatus.checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.authenticated),

    // TODO: getter para saber si es Admin o no

    username: computed(() => user.value?.fullName),

    // Actions
    login,
    logout,
  };
});
