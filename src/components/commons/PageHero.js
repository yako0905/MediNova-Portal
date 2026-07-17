import React from 'react';
import Section from './Section';
import './PageHero.css';

/**
 * PageHero
 *
 * The centered "page title + intro paragraph on a colored band"
 * banner currently duplicated at the top of About, Contact, and
 * Appointment (each with its own copy of the same markup). Pages now
 * just pass their own eyebrow/title/subtitle.
 */
const PageHero = ({ eyebrow, title, subtitle, tone = 'primary' }) => {
  return (
    <Section tone={tone} tight className="page-hero">
      <div className="page-hero__inner">
        {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </Section>
  );
};

export default PageHero;
