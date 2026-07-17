import React from 'react';
import { Hero } from '../../components/hero';
import { Section } from '../../components/commons';
import { StatsGrid } from '../../components/Statistics';
import { ServicesGrid } from '../../components/services';
import { FeaturedDoctors } from '../../components/doctors';
import { TestimonialsGrid } from '../../components/testimonials';
import { FAQAccordion } from '../../components/FAQ';
import { CTASection } from '../../components/CTA';
import { IconCalendar } from '../../components/commons/icons';

import services from '../../data/services';
import statistics from '../../data/statistics';
import doctors from '../../data/doctors';
import testimonials from '../../data/testimonials';
import { faqs } from '../../data/faq';

/**
 * Home
 *
 * Phase 4 rebuild: the old hand-rolled Bootstrap markup (hotlinked
 * Unsplash images, repeated `py-5 bg-light` sections, inline-styled
 * icon circles) is replaced entirely with the reusable section
 * components from Phase 2, fed by the shared data files under
 * src/data. No new one-off UI is introduced here — every section
 * below is a component other pages already use or will reuse.
 */
const home = () => {
  return (
    <div>
      <Hero
        eyebrow="Your Health, Our Priority"
        title="Compassionate Care, Modern Medicine"
        subtitle="Providing exceptional healthcare services with state-of-the-art technology and a team that treats you like family."
        primaryAction={{ label: 'Book Appointment', to: '/appointment', icon: IconCalendar }}
        secondaryAction={{ label: 'Learn More', to: '/about' }}
      />

      <Section tone="surface">
        <StatsGrid stats={statistics} />
      </Section>

      <Section>
        <ServicesGrid services={services} limit={4} />
      </Section>

      <Section tone="surface">
        <FeaturedDoctors doctors={doctors} limit={4} />
      </Section>

      <Section>
        <TestimonialsGrid testimonials={testimonials} />
      </Section>

      <Section tone="surface">
        <FAQAccordion faqs={faqs} />
      </Section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Book your appointment today and take the first step towards better health."
        actions={[{ label: 'Book Your Appointment Now', to: '/appointment', variant: 'accent' }]}
      />
    </div>
  );
};

export default home;