import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import './NavLinks.css';

/**
 * NavLinks
 *
 * Renders the shared nav link list. Used both in the desktop bar and
 * inside MobileMenu — `onLinkClick` lets the mobile menu close itself
 * when a link is tapped.
 */
const NavLinks = ({ className = '', onLinkClick }) => {
  const location = useLocation();

  return (
    <ul className={`nav-links ${className}`}>
      {navLinks.map((link) => {
        const isActive = location.pathname === link.to;
        return (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`nav-links__link ${isActive ? 'nav-links__link--active' : ''}`}
              onClick={onLinkClick}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
