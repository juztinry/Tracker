import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { RegisterCredentials } from '../types/auth.types';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const { register, error, isLoading } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
  });

  // Check if server is running
  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/health');
        if (!response.ok) {
          setServerError('Server is not responding. Please try again later.');
        } else {
          setServerError(null);
        }
      } catch (error) {
        setServerError('Cannot connect to server. Please make sure the server is running.');
      }
    };

    checkServerStatus();
  }, []);

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
            minLength={6}
          />
          <small className="password-requirements">
            Password must be at least 6 characters long and should include uppercase, lowercase, numbers, and special characters.
          </small>
        </div>
        {error && <div className="error-message">{error}</div>}
        {serverError && <div className="error-message">{serverError}</div>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
