import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthCard } from '../../components/auth';
import { Button } from '../../components/commons';
import { FormField, Checkbox, SocialAuthButtons } from '../../components/Form';

import socialAuthProviders from '../../data/socialAuthProviders';
import './login.css';

const initialFormState = { email: '', password: '', rememberMe: false };

/**
 * Login
 *
 * Phase 4 rebuild: a clean authentication form on top of the shared
 * AuthCard layout (also used by Register) and Form component library.
 * No auth backend exists yet, so submitting just validates the fields
 * and simulates success — swap handleSubmit's body for a real
 * apiRequest('/auth/login', ...) call once that endpoint exists.
 */
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password) nextErrors.password = 'Please enter your password.';
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Placeholder for real authentication — no backend wired up yet.
    navigate('/dashboard');
  };

  return (
    <AuthCard
      eyebrow="Account"
      title="Welcome Back"
      subtitle="Log in to manage your appointments and medical records."
      footer={
        <>
          Don't have an account? <Link to="/register">Create one</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          error={errors.email}
        />
        <FormField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
          error={errors.password}
        />

        <div className="login-form__row">
          <Checkbox
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          >
            Remember me
          </Checkbox>
          <a href="#forgot-password" className="login-form__forgot">
            Forgot Password?
          </a>
        </div>

        <Button type="submit" size="lg" fullWidth>
          Log In
        </Button>
      </form>

      <div className="login-form__divider">
        <span>or continue with</span>
      </div>

      <SocialAuthButtons providers={socialAuthProviders} />
    </AuthCard>
  );
};

export default Login;