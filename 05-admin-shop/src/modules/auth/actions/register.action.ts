import { tesloApi } from '@/api/tesloApi';
import type { AuthResponse } from '../types';
import { isAxiosError } from 'axios';

interface RegisterError {
  ok: false;
  message: string;
}

interface RegisterSuccess {
  ok: true;
  message: string;
}

export const registerAction = async (
  fullName: string,
  email: string,
  password: string,
): Promise<RegisterSuccess | RegisterError> => {
  try {
    await tesloApi.post<AuthResponse>('/auth/register', {
      fullName,
      email,
      password,
    });

    return {
      ok: true,
      message: 'User created successfully',
    };

  } catch (error) {
    if (isAxiosError(error)) {
      return {
        ok: false,
        message: 'There was an error creating the user',
      };
    }

    throw new Error('No se pudo realizar la petición');
  }
};
