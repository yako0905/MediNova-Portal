import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Button
 *
 * The single button implementation for the whole site. Every CTA —
 * "Book Appointment", "Learn More", form submits, footer links styled
 * as buttons — should render through this component instead of a raw
 * <button> or <a className="btn ..."> so variant/size/state stay
 * consistent everywhere.
 *
 * Renders a <Link> when `to` is given (internal route), an <a> when
 * `href` is given (external/anchor), otherwise a <button>.
 */
const Button = ({
  children,
  variant = 'primary', // 'primary' | 'outline' | 'ghost' | 'accent'
  size = 'md', // 'sm' | 'md' | 'lg'
  to,
  href,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  onClick,
  className = '',
  ...rest
}) => {
  const classes = [
    'btn-app',
    `btn-app--${variant}`,
    `btn-app--${size}`,
    fullWidth ? 'btn-app--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn-app__icon" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn-app__icon" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;
