import { supabase } from '../lib/supabase';
import { LoginCredentials, RegisterCredentials } from '../types/auth.types';

export const AuthService = {
  login: async ({ email, password }: LoginCredentials) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Login error:', error);

        // Provide more user-friendly error messages
        if (error.message.includes('Invalid login credentials')) {
          throw new Error('Invalid email or password. Please check your credentials and try again.');
        } else if (error.message.includes('Email not confirmed')) {
          throw new Error('Please confirm your email address before logging in.');
        } else {
          throw error;
        }
      }

      return data;
    } catch (error: any) {
      throw new Error(error.message || 'Failed to login');
    }
  },

  register: async ({ email, password, name }: RegisterCredentials) => {
    try {
      console.log('AuthService.register called with:', { email, password: '***', name });

      // Basic validation
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Check for password complexity
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (!(hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar)) {
        throw new Error('Password must include uppercase, lowercase, numbers, and special characters');
      }

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

        // Provide more user-friendly error messages
        if (error.message.includes('email')) {
          throw new Error('Invalid email address or email already in use');
        } else if (error.message.includes('password')) {
          throw new Error('Password does not meet security requirements');
        } else {
          throw error;
        }
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
