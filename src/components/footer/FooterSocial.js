import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import * as Icons from '../commons/icons';
import './FooterSocial.css';

const FooterSocial = () => (
  <div className="footer-social">
    {socialLinks.map((social) => {
      const Icon = Icons[social.icon];
      return (
        <a
          key={social.label}
          href={social.href}
          className="footer-social__link"
          aria-label={social.label}
        >
          {Icon && <Icon aria-hidden="true" />}
        </a>
      );
    })}
  </div>
);

export default FooterSocial;
