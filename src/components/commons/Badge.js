import React from 'react';
import './Badge.css';

/**
 * Badge
 *
 * Small pill-shaped label. Used for things like a department tag on a
 * doctor card, an "Available Today" status, or a category tag on a
 * service card. Kept intentionally tiny in scope — if it needs to be
 * clickable or removable, that's a different component.
 */
const Badge = ({ children, tone = 'primary', className = '' }) => {
  // tone: 'primary' | 'accent' | 'success' | 'neutral'
  return <span className={`badge-app badge-app--${tone} ${className}`}>{children}</span>;
};

export default Badge;
