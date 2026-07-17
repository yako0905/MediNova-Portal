import React from 'react';
import { Link } from 'react-router-dom';
import { IconHeartbeat } from '../commons/icons';
import './NavLogo.css';

const NavLogo = () => (
  <Link className="nav-logo" to="/" aria-label="HealthCare Center — go to homepage">
    <span className="nav-logo__icon">
      <IconHeartbeat aria-hidden="true" />
    </span>
    <span className="nav-logo__text">HealthCare Center</span>
  </Link>
);

export default NavLogo;
