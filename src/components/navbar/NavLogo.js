import React from 'react';
import { Link } from 'react-router-dom';
import { IconHeartbeat } from '../commons/icons';
import './NavLogo.css';

const NavLogo = () => (
  <Link className="nav-logo" to="/" aria-label="MediNova — go to homepage">
    <span className="nav-logo__icon">
      <IconHeartbeat aria-hidden="true" />
    </span>
    <span className="nav-logo__text">MediNova</span>
  </Link>
);

export default NavLogo;
