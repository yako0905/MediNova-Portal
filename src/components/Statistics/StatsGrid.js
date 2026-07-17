import React from 'react';
import StatItem from './StatItem';
import { FadeIn } from '../commons';
import './StatsGrid.css';

/**
 * StatsGrid
 *
 * A responsive row of StatItems. No heading by default since it's
 * often used directly under another section (as on the old About
 * page) — pass `title`/`subtitle` if the grid needs its own heading.
 */
const StatsGrid = ({ stats }) => {
  return (
    <div className="stats-grid">
      {stats.map((stat, i) => (
        <FadeIn key={stat.id} delay={i * 0.06}>
          <StatItem stat={stat} />
        </FadeIn>
      ))}
    </div>
  );
};

export default StatsGrid;
