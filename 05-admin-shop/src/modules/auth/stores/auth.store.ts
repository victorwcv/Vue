import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { AuthStatus, type User } from '@/modules/auth/types';
import { checkAuthAction, loginAction, registerAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.checking);
  const user = ref<User | null>(null);
  const token = ref(useLocalStorage<string | null>('token', null));

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

  const register = async (fullName: string, email: string, password: string) => {
    try {
      const registerResp = await registerAction(fullName, email, password);

      if (!registerResp.ok) {
        return false;
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const checkAuthStatus = async (): Promise<boolean> => {
    try {
      const statusResp = await checkAuthAction();

      if (!statusResp.ok) {
        logout();
        return false;
      }

      user.value = statusResp.user;
      token.value = statusResp.token;
      authStatus.value = AuthStatus.authenticated;

      return true;
    } catch (error) {
      console.log(error);
      logout();
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');

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

    isAdmin: computed(() => user.value?.roles.includes('admin') || false),

    username: computed(() => user.value?.fullName),

    // Actions
    login,
    register,
    checkAuthStatus,
    logout,
  };
});
