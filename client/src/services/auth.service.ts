import { supabase } from '../lib/supabase';
import { LoginCredentials, RegisterCredentials } from '../types/auth.types';

export const AuthService = {
  login: async ({ email, password }: LoginCredentials) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Failed to login');
    }
  },

  register: async ({ email, password, name }: RegisterCredentials) => {
    try {
      console.log('AuthService.register called with:', { email, password: '***', name });

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      console.log('Supabase signUp response:', { data, error });

      if (error) {
        console.error('Supabase registration error:', error);
        throw error;
      }

      console.log('Registration successful, returning data:', data);
      return data;
    } catch (error: any) {
      console.error('Registration error caught:', error);
      throw new Error(error.message || 'Failed to register');
    }
  },

  logout: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: any) {
      throw new Error(error.message || 'Failed to logout');
    }
  },

  getCurrentUser: async () => {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      return data.user;
    } catch (error: any) {
      throw new Error(error.message || 'Failed to get current user');
    }
  },
};
