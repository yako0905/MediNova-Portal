import React from 'react';
import * as Icons from '../commons/icons';
import { IconBadge } from '../commons';
import './StatItem.css';

/**
 * StatItem
 *
 * One "50+ Expert Doctors" style block. Replaces the inline-styled
 * circle+icon+number markup duplicated in the old Home.js and
 * About.js stats sections.
 */
const StatItem = ({ stat }) => {
  const Icon = Icons[stat.icon] || Icons.IconAward;

  return (
    <div className="stat-item">
      <IconBadge icon={Icon} size="md" tone="primary" />
      <span className="stat-item__value">{stat.value}</span>
      <span className="stat-item__label">{stat.label}</span>
    </div>
  );
};

export default StatItem;
