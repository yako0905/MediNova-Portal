import React from 'react';
import { Section, Button } from '../commons';
import './CTASection.css';

/**
 * CTASection
 *
 * The full-width colored banner with a heading, short line of copy,
 * and one or two buttons — used at the bottom of Home ("Ready to Get
 * Started?") and Appointment ("Need Immediate Assistance?"). Accepts
 * an array of actions so it can render one or two buttons without the
 * component needing to know which page it's on.
 */
const CTASection = ({ title, subtitle, actions = [], tone = 'primary' }) => {
  return (
    <Section tone={tone} className="cta-section">
      <div className="cta-section__inner">
        <h2 className="cta-section__title">{title}</h2>
        {subtitle && <p className="cta-section__subtitle">{subtitle}</p>}
        {actions.length > 0 && (
          <div className="cta-section__actions">
            {actions.map((action) => (
              <Button
                key={action.label}
                to={action.to}
                href={action.href}
                variant={action.variant || 'outline'}
                size="lg"
                icon={action.icon}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default CTASection;
