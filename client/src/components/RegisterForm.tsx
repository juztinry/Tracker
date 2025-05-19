import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { RegisterCredentials } from '../types/auth.types';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const { register, error, isLoading } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting registration with credentials:', credentials);
    try {
      console.log('Calling register function...');
      await register(credentials);
      console.log('Registration successful!');
      // Navigate to dashboard after successful registration
      navigate('/dashboard');
    } catch (error) {
      // Error is handled in the auth context
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
