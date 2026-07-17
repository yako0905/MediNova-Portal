import React from 'react';
import { IconCheckCircle, IconAlertCircle } from '../commons/icons';
import './FormMessage.css';

/**
 * FormMessage
 *
 * The success / error / info banner shown after a form submit —
 * used by Contact, Appointment, Login, and Register instead of each
 * page rolling its own `alert alert-success` markup. `role="status"`
 * (success/info) vs `role="alert"` (error) so screen readers announce
 * it appropriately without stealing focus.
 */
const FormMessage = ({ tone = 'success', children }) => {
  // tone: 'success' | 'error' | 'info'
  const Icon = tone === 'error' ? IconAlertCircle : IconCheckCircle;

  return (
    <div
      className={`form-message form-message--${tone}`}
      role={tone === 'error' ? 'alert' : 'status'}
    >
      <Icon aria-hidden="true" className="form-message__icon" />
      <div className="form-message__body">{children}</div>
    </div>
  );
};

export default FormMessage;
