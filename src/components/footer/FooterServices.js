import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import './FooterServices.css';

const FooterServices = () => (
  <div className="footer-services">
    <h5 className="footer-services__heading">Services</h5>
    <ul className="footer-services__list">
      {services.slice(0, 5).map((service) => (
        <li key={service.id}>
          <Link to="/about">{service.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterServices;
