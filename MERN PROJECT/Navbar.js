import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-heartbeat me-2"></i>
          HealthCare Center
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={isActive('/')} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/about')} to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/contact')} to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary ms-2" to="/appointment">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 