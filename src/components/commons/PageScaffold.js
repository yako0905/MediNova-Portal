import React from 'react';
import Section from './Section';
import './PageScaffold.css';

/**
 * PageScaffold
 * A consistent, responsive shell for pages that don't have their
 * real UI built yet. Swap this out page-by-page as each one is
 * implemented — the route stays the same, only the contents change.
 */
const PageScaffold = ({ eyebrow, title, description, children }) => {
  return (
    <Section tight>
      <div className="page-scaffold__intro">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p className="text-muted-app">{description}</p>}
      </div>

      <div className="page-scaffold__placeholder">
        {children || 'This page is scaffolded and ready for its real layout.'}
      </div>
    </Section>
  );
};

export default PageScaffold;
