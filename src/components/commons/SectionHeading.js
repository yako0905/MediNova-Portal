import React from 'react';
import './SectionHeading.css';

/**
 * SectionHeading
 *
 * The eyebrow / title / subtitle block that introduces almost every
 * section on the site ("Our Specialties", "Why Choose Us", "What
 * Patients Say", etc). Centralizing it means every section gets the
 * same spacing and alignment without copy-pasting the same three
 * elements on every page.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = '',
}) => {
  return (
    <div className={`section-heading section-heading--${align} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-heading__title">{title}</h2>}
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
