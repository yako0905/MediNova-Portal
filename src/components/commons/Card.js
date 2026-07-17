import React from 'react';
import './Card.css';

/**
 * Card
 *
 * Generic rounded, shadowed surface. Feature-specific cards (service
 * cards, doctor cards, testimonial cards, info cards on the
 * Appointment page) should compose this rather than re-implementing
 * border-radius/box-shadow/hover behavior each time.
 *
 * `hoverable` adds the lift-on-hover interaction used on grid cards;
 * static cards (e.g. inside a form) should leave it off.
 */
const Card = ({
  children,
  hoverable = false,
  padded = true,
  className = '',
  as: Tag = 'div',
  ...rest
}) => {
  const classes = [
    'card-app',
    hoverable ? 'card-app--hoverable' : '',
    padded ? 'card-app--padded' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

export default Card;
