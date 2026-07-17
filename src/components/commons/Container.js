import React from 'react';

/**
 * Container
 *
 * Centers content and caps it at the design system's max width
 * (--container-max, 1200px) with responsive side padding. Every
 * section on every page should wrap its content in this rather than
 * repeating the Bootstrap `.container` class.
 */
const Container = ({ children, className = '', as: Tag = 'div', ...rest }) => (
  <Tag className={`container-app ${className}`} {...rest}>
    {children}
  </Tag>
);

export default Container;
