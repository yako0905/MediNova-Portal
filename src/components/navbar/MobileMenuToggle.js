import React from 'react';
import { IconMenu, IconClose } from '../commons/icons';
import './MobileMenuToggle.css';

const MobileMenuToggle = ({ isOpen, onClick }) => (
  <button
    type="button"
    className="mobile-menu-toggle"
    onClick={onClick}
    aria-expanded={isOpen}
    aria-controls="mobile-nav-menu"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    {isOpen ? <IconClose aria-hidden="true" /> : <IconMenu aria-hidden="true" />}
  </button>
);

export default MobileMenuToggle;
