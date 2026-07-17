import React from 'react';
import { PageHero, Section } from '../../components/commons';
import { FeatureGrid } from '../../components/Features';
import { FeaturedDoctors } from '../../components/doctors';
import { CTASection } from '../../components/CTA';

import { missionVision, whyChooseUs, ourValues } from '../../data/about';
import doctors from '../../data/doctors';

/**
 * About
 *
 * Phase 4 rebuild: replaces the old Bootstrap markup (raw
 * `fas fa-*` icons, repeated `py-5 bg-light` sections, an inline
 * specialties array duplicating src/data/services.js) with the
 * shared component library. Mission/Vision, Why Choose Us, and Our
 * Values all reuse the same FeatureGrid component with different
 * data — no new one-off card markup per section.
 */
const About = () => {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="About HealthCare Center"
        subtitle="Dedicated to providing exceptional healthcare services with compassion and excellence since 1995."
      />

      <Section>
        <FeatureGrid
          items={missionVision}
          eyebrow="Our Story"
          title="Mission & Vision"
          subtitle="What drives everything we do, from the exam room to the front desk."
          columns={2}
        />
      </Section>

      <Section tone="surface">
        <FeatureGrid
          items={whyChooseUs}
          eyebrow="What We Offer"
          title="Why Choose Us"
          subtitle="We are committed to providing the highest quality healthcare services with a focus on patient comfort and satisfaction."
          columns={3}
        />
      </Section>

      <Section>
        <FeatureGrid
          items={ourValues}
          eyebrow="Our Culture"
          title="Our Values"
          subtitle="The principles that guide every member of our team."
          columns={4}
        />
      </Section>

      <Section tone="surface">
        <FeaturedDoctors
          doctors={doctors}
          eyebrow="Meet the Team"
          title="Our Doctors"
          subtitle="Every physician on our team is board-certified and committed to your care."
        />
      </Section>

      <CTASection
        title="Ready to Experience Better Healthcare?"
        subtitle="Book your appointment today and take the first step towards better health."
        actions={[{ label: 'Book an Appointment', to: '/appointment', variant: 'accent' }]}
      />
    </div>
  );
};

export default About;