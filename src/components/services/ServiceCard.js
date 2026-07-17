import React from 'react';
import * as Icons from '../commons/icons';
import { IconBadge, Card } from '../commons';
import './ServiceCard.css';

/**
 * ServiceCard
 *
 * Renders one entry from data/services.js. Icon-forward by design —
 * the old cards depended on hotlinked Unsplash photos; this uses the
 * IconBadge pattern instead so it never breaks if a photo is missing.
 * If a real `image` is supplied later, it renders above the content.
 */
const ServiceCard = ({ service }) => {
  const Icon = Icons[service.icon] || Icons.IconHeartbeat;

  return (
    <Card hoverable className="service-card">
      <IconBadge icon={Icon} size="md" tone="primary" />
      <h3 className="service-card__title">{service.name}</h3>
      <p className="service-card__description">{service.description}</p>
    </Card>
  );
};

export default ServiceCard;
