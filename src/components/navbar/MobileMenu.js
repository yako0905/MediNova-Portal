import React from 'react';
import NavLinks from './NavLinks';
import { Button } from '../commons';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onLinkClick }) => (
  <div
    id="mobile-nav-menu"
    className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
    aria-hidden={!isOpen}
  >
    <NavLinks className="mobile-menu__links" onLinkClick={onLinkClick} />
    <Button to="/appointment" variant="primary" fullWidth onClick={onLinkClick}>
      Book Appointment
    </Button>
  </div>
);

export default MobileMenu;
