import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import MobileMenuToggle from './MobileMenuToggle';
import MobileMenu from './MobileMenu';
import { Container, Button } from '../commons';
import './Navbar.css';

/**
 * Navbar
 *
 * Rebuilt from scratch per the roadmap (Home + Navbar were flagged as
 * full rebuilds, not refactors). Previously the mobile menu was pure
 * Bootstrap markup (data-bs-toggle="collapse") with no React state at
 * all. This version tracks open/closed in useState and closes itself
 * automatically on route change, so a stale-open mobile menu can never
 * linger after navigating.
 */
const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar-app">
      <Container>
        <div className="navbar-app__row">
          <NavLogo />

          <NavLinks className="navbar-app__desktop-links" />

          <div className="navbar-app__actions">
            <Button to="/appointment" variant="primary" className="navbar-app__cta">
              Book Appointment
            </Button>
            <MobileMenuToggle
              isOpen={isMobileOpen}
              onClick={() => setIsMobileOpen((open) => !open)}
            />
          </div>
        </div>
      </Container>

      <MobileMenu isOpen={isMobileOpen} onLinkClick={() => setIsMobileOpen(false)} />
    </header>
  );
};

export default Navbar;
