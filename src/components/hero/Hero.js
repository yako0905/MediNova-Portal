import React from 'react';
import { Button, Container, FadeIn } from '../commons';
import './Hero.css';

/**
 * Hero
 *
 * The first thing a visitor sees on Home. Replaces the old
 * hotlinked-Unsplash-background hero with a token-driven gradient and
 * a two-button CTA pair. Content is passed in as props so this stays
 * reusable if another page ever needs a hero (e.g. Doctors listing).
 */
const Hero = ({ eyebrow, title, subtitle, primaryAction, secondaryAction }) => {
  return (
    <section className="hero">
      <Container>
        <FadeIn className="hero__content">
          {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
          <h1 className="hero__title">{title}</h1>
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          <div className="hero__actions">
            {primaryAction && (
              <Button to={primaryAction.to} variant="accent" size="lg" icon={primaryAction.icon}>
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button to={secondaryAction.to} variant="outline" size="lg">
                {secondaryAction.label}
              </Button>
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
