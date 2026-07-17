import React from 'react';
import ServiceCard from './ServiceCard';
import { SectionHeading, FadeIn } from '../commons';
import './ServicesGrid.css';

/**
 * ServicesGrid
 *
 * Renders a SectionHeading + responsive grid of ServiceCards from a
 * given list (defaults to all services, but accepts a `limit` for a
 * "preview" use on Home vs. the full list on About).
 */
const ServicesGrid = ({
  services,
  eyebrow = 'What We Offer',
  title = 'Our Services',
  subtitle = 'Comprehensive healthcare services to meet all your medical needs.',
  limit,
}) => {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className="services-grid-wrap">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="services-grid">
        {items.map((service, i) => (
          <FadeIn key={service.id} delay={i * 0.06}>
            <ServiceCard service={service} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
