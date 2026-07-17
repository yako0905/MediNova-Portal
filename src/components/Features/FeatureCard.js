import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '../commons/icons';
import { Card, IconBadge } from '../commons';
import './FeatureCard.css';

/**
 * FeatureCard
 *
 * One icon + title + description block, built from the existing
 * IconBadge + Card components. This is the generic "info card"
 * pattern repeated across the old About (Why Choose Us, Our Values),
 * Appointment (Important Information), and Contact (info panel)
 * sections — centralized here instead of copy-pasted per page.
 *
 * Pass `to` (internal) or `href` (external) to make the whole card a
 * link — used for Dashboard's quick-action cards.
 */
const FeatureCard = ({ icon, title, description, to, href, tone = 'primary' }) => {
  const Icon = Icons[icon] || Icons.IconCheckCircle;
  const linkProps = to ? { as: Link, to } : href ? { as: 'a', href } : {};

  return (
    <Card hoverable className="feature-card" {...linkProps}>
      <IconBadge icon={Icon} tone={tone} />
      <h3 className="feature-card__title">{title}</h3>
      {description && (
        <p className="feature-card__description">
          {description.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
      )}
    </Card>
  );
};

export default FeatureCard;
