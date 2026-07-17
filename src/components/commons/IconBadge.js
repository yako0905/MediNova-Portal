import React from 'react';
import './IconBadge.css';

/**
 * IconBadge
 *
 * The circular, tinted icon container used in the "Why Choose Us"
 * features on Home and the stat blocks on About/Home. Currently that
 * pattern is copy-pasted as inline styles in the old Home.js and
 * About.js — this component replaces every one of those copies.
 */
const IconBadge = ({ icon: Icon, size = 'md', tone = 'primary' }) => {
  // size: 'sm' | 'md' | 'lg'
  return (
    <span className={`icon-badge icon-badge--${size} icon-badge--${tone}`}>
      <Icon aria-hidden="true" />
    </span>
  );
};

export default IconBadge;
