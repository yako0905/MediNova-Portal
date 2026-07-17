import React, { useMemo } from 'react';
import './PasswordStrengthMeter.css';

const LEVELS = [
  { label: 'Very weak', tone: 'weak' },
  { label: 'Weak', tone: 'weak' },
  { label: 'Fair', tone: 'fair' },
  { label: 'Good', tone: 'good' },
  { label: 'Strong', tone: 'strong' },
];

/**
 * scorePassword
 *
 * A simple, client-side-only heuristic (length + character variety).
 * This is UI feedback to nudge users toward a stronger password, not
 * a security control — real strength/breach validation still belongs
 * on the backend.
 */
const scorePassword = (password) => {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return Math.min(score, 4);
};

/**
 * PasswordStrengthMeter
 *
 * Four-segment bar + label under the password field on Register.
 * Purely presentational — driven entirely by the `password` prop, no
 * internal state.
 */
const PasswordStrengthMeter = ({ password }) => {
  const score = useMemo(() => scorePassword(password), [password]);

  if (!password) return null;

  const level = LEVELS[score];

  return (
    <div className="password-strength" aria-live="polite">
      <div className="password-strength__bars">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`password-strength__bar ${
              i < score ? `password-strength__bar--${level.tone}` : ''
            }`}
          />
        ))}
      </div>
      <span className={`password-strength__label password-strength__label--${level.tone}`}>
        {level.label}
      </span>
    </div>
  );
};

export default PasswordStrengthMeter;
