import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/footerLinks';
import './FooterLinks.css';

const FooterLinks = () => (
  <div className="footer-links">
    <h5 className="footer-links__heading">Quick Links</h5>
    <ul className="footer-links__list">
      {footerLinks.map((link) => (
        <li key={link.to}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinks;
