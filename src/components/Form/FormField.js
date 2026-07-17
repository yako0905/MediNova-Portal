import React, { useId, useState } from 'react';
import { IconEye, IconEyeOff, IconAlertCircle } from '../commons/icons';
import './FormField.css';

/**
 * FormField
 *
 * The single form-control implementation for the whole site — every
 * text input, textarea, select, and password field on Contact,
 * Appointment, Login, and Register renders through this instead of a
 * one-off `<input className="form-control">` per page.
 *
 * `type="password"` automatically grows a show/hide toggle so no
 * separate "PasswordField" component is needed. `as="textarea"` or
 * `as="select"` swap the rendered element; `options` feeds the select.
 */
const FormField = ({
  as = 'input',
  type = 'text',
  label,
  name,
  id,
  value,
  onChange,
  onBlur,
  required = false,
  placeholder,
  error,
  hint,
  options,
  rows = 5,
  className = '',
  ...rest
}) => {
  const autoId = useId();
  const fieldId = id || `${name}-${autoId}`;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const resolvedType = isPassword && showPassword ? 'text' : type;

  const controlClasses = [
    'form-field__control',
    error ? 'form-field__control--error' : '',
    isPassword ? 'form-field__control--with-toggle' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const renderControl = () => {
    if (as === 'textarea') {
      return (
        <textarea
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={controlClasses}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          {...rest}
        />
      );
    }

    if (as === 'select') {
      return (
        <select
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          className={controlClasses}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          {...rest}
        >
          <option value="">{placeholder || 'Select an option'}</option>
          {options.map((opt) => {
            const value_ = typeof opt === 'string' ? opt : opt.value;
            const label_ = typeof opt === 'string' ? opt : opt.label;
            return (
              <option key={value_} value={value_}>
                {label_}
              </option>
            );
          })}
        </select>
      );
    }

    return (
      <input
        id={fieldId}
        type={resolvedType}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        placeholder={placeholder}
        className={controlClasses}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        {...rest}
      />
    );
  };

  return (
    <div className={`form-field ${className}`}>
      {label && (
        <label htmlFor={fieldId} className="form-field__label">
          {label}
          {required && (
            <span className="form-field__required" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="form-field__control-wrap">
        {renderControl()}
        {isPassword && (
          <button
            type="button"
            className="form-field__toggle"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
          >
            {showPassword ? <IconEyeOff aria-hidden="true" /> : <IconEye aria-hidden="true" />}
          </button>
        )}
      </div>

      {hint && !error && <p className="form-field__hint">{hint}</p>}
      {error && (
        <p className="form-field__error" id={`${fieldId}-error`} role="alert">
          <IconAlertCircle aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
