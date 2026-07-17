import React from 'react';
import FeatureCard from './FeatureCard';
import { SectionHeading, FadeIn } from '../commons';
import './FeatureGrid.css';

/**
 * FeatureGrid
 *
 * Renders an optional SectionHeading + a responsive grid of
 * FeatureCards from a list of {id, icon, title, description}. Used
 * for "Why Choose Us" / "Our Values" on About, "Important
 * Information" on Appointment, and quick actions on Dashboard.
 *
 * `columns` sets the desktop column count (grid collapses to 2 on
 * tablet and 1 on mobile regardless).
 */
const FeatureGrid = ({ items, eyebrow, title, subtitle, columns = 3, tone = 'primary' }) => {
  return (
    <div className="feature-grid-wrap">
      {(title || subtitle) && <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />}
      <div className={`feature-grid feature-grid--cols-${columns}`}>
        {items.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.06}>
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              to={item.to}
              href={item.href}
              tone={item.tone || tone}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
