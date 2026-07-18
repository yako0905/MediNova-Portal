import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthCard } from '../../components/auth';
import { Button } from '../../components/commons';
import { FormField, FormRow, Checkbox, PasswordStrengthMeter } from '../../components/Form';
import { registerUser } from "../../services/authService";

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
};

/**
 * Register
 *
 * Phase 4 rebuild: sits on the same AuthCard shell as Login. The
 * password strength meter is purely a UI nudge (see
 * components/Form/PasswordStrengthMeter) — real password rules still
 * belong on the backend. No account backend exists yet, so submitting
 * validates the fields and simulates success.
 */
const Register = () => {
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
    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter a phone number.';
    } else if (!/^[\d()+\-\s]{7,}$/.test(formData.phone)) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.password) {
      nextErrors.password = 'Please choose a password.';
    } else if (formData.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }
    if (formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!formData.agreeToTerms) {
      nextErrors.agreeToTerms = 'You must agree to the Terms & Conditions to continue.';
    }
    return nextErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const nextErrors = validate();
  setErrors(nextErrors);

  if (Object.keys(nextErrors).length > 0) return;

  try {
    const response = await registerUser({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      role: "patient",
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    alert("Registration Successful!");

    navigate("/dashboard");
  } catch (error) {
    alert(
      error.response?.data?.message || "Registration failed."
    );
  }
};

  return (
    <AuthCard
      eyebrow="Account"
      title="Create Account"
      subtitle="Register to book appointments and keep track of your care."
      footer={
        <>
          Already have an account? <Link to="/login">Log in</Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} noValidate>
        <FormField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          error={errors.fullName}
        />

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
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          error={errors.phone}
        />

        <FormRow>
          <FormField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Create a password"
            error={errors.password}
          />
          <FormField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Re-enter your password"
            error={errors.confirmPassword}
          />
        </FormRow>

        <PasswordStrengthMeter password={formData.password} />

        <Checkbox
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
          error={errors.agreeToTerms}
        >
          I agree to the <a href="#terms">Terms &amp; Conditions</a>
        </Checkbox>

        <Button type="submit" size="lg" fullWidth>
          Create Account
        </Button>
      </form>
    </AuthCard>
  );
};

export default Register;