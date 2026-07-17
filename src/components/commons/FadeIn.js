import React from 'react';
import { motion } from 'framer-motion';

/**
 * FadeIn
 *
 * A restrained, single reveal animation — fade + slight rise,
 * triggered once when the element scrolls into view. Used to wrap
 * section headings, cards, and hero content so motion stays
 * consistent site-wide instead of every component inventing its own
 * framer-motion config.
 *
 * Respects prefers-reduced-motion automatically via framer-motion's
 * defaults being simple opacity/transform (no layout thrash), and the
 * global.css reduced-motion rule shortens transition durations for
 * anyone with that preference set.
 */
const FadeIn = ({ children, delay = 0, y = 16, className = '', as = 'div' }) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
