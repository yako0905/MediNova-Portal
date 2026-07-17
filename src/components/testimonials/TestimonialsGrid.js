import React from 'react';
import TestimonialCard from './TestimonialCard';
import { SectionHeading, FadeIn } from '../commons';
import './TestimonialsGrid.css';

const TestimonialsGrid = ({
  testimonials,
  eyebrow = 'Patient Stories',
  title = 'What Patients Say',
  subtitle = 'Real experiences from people we\u2019ve cared for.',
}) => {
  return (
    <div>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <FadeIn key={t.id} delay={i * 0.08}>
            <TestimonialCard testimonial={t} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsGrid;
