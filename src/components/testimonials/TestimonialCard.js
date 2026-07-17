import React from 'react';
import { Card } from '../commons';
import './TestimonialCard.css';

/**
 * TestimonialCard
 *
 * One patient quote. Falls back to the patient's initial in a circle
 * if no avatar image is available yet (avatars are placeholder paths
 * in data/testimonials.js until real photos/consented images exist).
 */
const TestimonialCard = ({ testimonial }) => {
  const initial = testimonial.name.charAt(0);

  return (
    <Card className="testimonial-card">
      <p className="testimonial-card__quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="testimonial-card__person">
        <span className="testimonial-card__avatar" aria-hidden="true">
          {initial}
        </span>
        <div>
          <p className="testimonial-card__name">{testimonial.name}</p>
          <p className="testimonial-card__role">{testimonial.role}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
