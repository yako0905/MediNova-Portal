import React from 'react';
import './FormRow.css';

/**
 * FormRow
 *
 * Lays two (or more) FormFields side by side on tablet/desktop and
 * stacks them on mobile. Replaces the repeated Bootstrap
 * `row > col-md-6` pairing used throughout the old Contact and
 * Appointment forms.
 */
const FormRow = ({ children, className = '' }) => (
  <div className={`form-row ${className}`}>{children}</div>
);

export default FormRow;
