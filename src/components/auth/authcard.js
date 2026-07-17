import React from 'react';
import { Section, Card } from '../commons';
import './authcard.css';

/**
 * AuthCard
 *
 * The centered "small card on a soft background" shell shared by
 * Login and Register â€” identical layout, different form contents.
 * Keeping it here means both pages stay in sync automatically if the
 * auth layout changes later (e.g. adding a side illustration).
 */
const authcard = ({ eyebrow, title, subtitle, children, footer }) => {
  return (
    <Section tone="surface">
      <div className="auth-card">
        <Card className="auth-card__card">
          <div className="auth-card__intro">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="auth-card__title">{title}</h1>
            {subtitle && <p className="auth-card__subtitle">{subtitle}</p>}
          </div>

          {children}

          {footer && <div className="auth-card__footer">{footer}</div>}
        </Card>
      </div>
    </Section>
  );
};

export default authcard;