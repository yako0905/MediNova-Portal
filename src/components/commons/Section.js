import React from 'react';
import Container from './Container';
import './Section.css';

/**
 * Section
 *
 * Standardizes vertical spacing and background tone between page
 * sections. Replaces the repeated `<section className="py-5 bg-light">`
 * / `bg-primary text-white` patterns copy-pasted across Home, About,
 * Contact, and Appointment.
 *
 * `tight` uses the smaller spacing scale (for sections stacked close
 * together, like info-card grids). `contained` wraps children in
 * <Container> automatically — turn it off if the section needs a
 * full-bleed background with its own inner container (e.g. a hero).
 */
const Section = ({
  children,
  tone = 'default', // 'default' | 'surface' | 'primary' | 'secondary'
  tight = false,
  contained = true,
  className = '',
  ...rest
}) => {
  const classes = [
    'section-app',
    tight ? 'section-app--tight' : '',
    `section-app--${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes} {...rest}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
};

export default Section;
