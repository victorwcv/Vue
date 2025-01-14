import { tesloApi } from '@/api/tesloApi';
import type { AuthResponse, User } from '../types';
import { isAxiosError } from 'axios';

interface LoginError {
  ok: false;
  message: string;
}

interface LoginSuccess {
  ok: true;
  user: User;
  token: string;
}

export const loginAction = async (
  email: string,
  password: string,
): Promise<LoginSuccess | LoginError> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/login', { email, password });

    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return {
        ok: false,
        message: 'Credenciales incorrectas',
      };
    }

    throw new Error('No se pudo realizar la petición');
  }
};
