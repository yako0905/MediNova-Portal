import React, { useId } from 'react';
import './Checkbox.css';

/**
 * Checkbox
 *
 * Styled checkbox with a proper associated `<label>` — used for
 * "Remember me" on Login and "I agree to the Terms & Conditions" on
 * Register. `children` is the label content so callers can drop a
 * `<Link>` inside it (e.g. "I agree to the Terms & Conditions").
 */
const Checkbox = ({ id, name, checked, onChange, required = false, children, error }) => {
  const autoId = useId();
  const fieldId = id || `${name}-${autoId}`;

  return (
    <div className="checkbox-field">
      <div className="checkbox-field__row">
        <input
          type="checkbox"
          id={fieldId}
          name={name}
          checked={checked}
          onChange={onChange}
          required={required}
          className="checkbox-field__input"
          aria-invalid={Boolean(error)}
        />
        <label htmlFor={fieldId} className="checkbox-field__label">
          {children}
        </label>
      </div>
      {error && (
        <p className="checkbox-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Checkbox;
