import React from 'react';
import { IconChevronDown } from '../commons/icons';
import './FAQItem.css';

/**
 * FAQItem
 *
 * One question/answer row. Previously this was Bootstrap's accordion
 * driven entirely by data-bs-toggle/data-bs-target attributes with no
 * React state at all — this version is a controlled, keyboard- and
 * screen-reader-accessible disclosure button instead.
 */
const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <button
        className="faq-item__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${faq.id}`}
        id={`faq-trigger-${faq.id}`}
      >
        <span>{faq.question}</span>
        <IconChevronDown
          className={`faq-item__chevron ${isOpen ? 'faq-item__chevron--open' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`faq-item__panel ${isOpen ? 'faq-item__panel--open' : ''}`}
        id={`faq-panel-${faq.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${faq.id}`}
      >
        <p className="faq-item__answer">{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
