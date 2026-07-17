import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { SectionHeading } from '../commons';
import './FAQAccordion.css';

/**
 * FAQAccordion
 *
 * Single-open accordion (opening one question closes the previous
 * one) driven by real React state. `allowMultiple` can be flipped on
 * if a future page wants several open at once.
 */
const FAQAccordion = ({
  faqs,
  eyebrow = 'Support',
  title = 'Frequently Asked Questions',
  subtitle,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState(() => new Set([faqs[0]?.id]));

  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set();
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="faq-accordion">
      {(title || subtitle) && <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />}
      <div className="faq-accordion__list">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} faq={faq} isOpen={openIds.has(faq.id)} onToggle={() => toggle(faq.id)} />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
