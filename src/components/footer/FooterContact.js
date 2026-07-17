import React from 'react';
import { contactInfo } from '../../data/contactInfo';
import { IconPhone, IconMail, IconMapPin } from '../commons/icons';
import './FooterContact.css';

const FooterContact = () => (
  <div className="footer-contact">
    <h5 className="footer-contact__heading">Contact Info</h5>
    <p className="footer-contact__row">
      <IconPhone aria-hidden="true" /> {contactInfo.phoneMain}
    </p>
    <p className="footer-contact__row">
      <IconMail aria-hidden="true" /> {contactInfo.emailInfo}
    </p>
    <p className="footer-contact__row">
      <IconMapPin aria-hidden="true" /> {contactInfo.address.line1}, {contactInfo.address.line2}
    </p>
  </div>
);

export default FooterContact;
