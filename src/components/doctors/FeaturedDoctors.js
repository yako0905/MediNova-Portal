import React from 'react';
import DoctorCard from './DoctorCard';
import { SectionHeading, FadeIn } from '../commons';
import './FeaturedDoctors.css';

/**
 * FeaturedDoctors
 *
 * Section wrapper that renders a SectionHeading + responsive grid of
 * DoctorCards. Used on Home for the "Featured Doctors" section.
 * `limit` lets Home show a short preview while a future full Doctors
 * listing page can render the complete list.
 */
const FeaturedDoctors = ({
  doctors,
  eyebrow = 'Our Team',
  title = 'Featured Doctors',
  subtitle = 'Meet a few of the experienced professionals behind your care.',
  limit,
}) => {
  const items = limit ? doctors.slice(0, limit) : doctors;

  return (
    <div>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="featured-doctors-grid">
        {items.map((doctor, i) => (
          <FadeIn key={doctor.id} delay={i * 0.06}>
            <DoctorCard doctor={doctor} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDoctors;
