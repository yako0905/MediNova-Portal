import React from 'react';
import { Container } from '../commons';
import FooterCompanyInfo from './FooterCompanyInfo';
import FooterLinks from './FooterLinks';
import FooterServices from './FooterServices';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-app">
      <Container>
        <div className="footer-app__grid">
          <FooterCompanyInfo />
          <FooterLinks />
          <FooterServices />
          <FooterContact />
        </div>

        <div className="footer-app__divider" />

        <div className="footer-app__bottom">
          <p className="footer-app__copyright">&copy; {year} HealthCare Center. All rights reserved.</p>
          <FooterSocial />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
