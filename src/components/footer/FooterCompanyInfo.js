import React from 'react';
import { IconHeartbeat } from '../commons/icons';
import './FooterCompanyInfo.css';

const FooterCompanyInfo = () => (
  <div className="footer-company">
    <div className="footer-company__brand">
      <IconHeartbeat aria-hidden="true" />
      <span>HealthCare Center</span>
    </div>
    <p className="footer-company__tagline">Your Health, Our Priority</p>
    <p className="footer-company__description">
      Providing quality healthcare services with compassion and excellence.
    </p>
  </div>
);

export default FooterCompanyInfo;
