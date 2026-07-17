import React, { useState } from 'react';
import { PageHero, Section, Card, Button } from '../../components/commons';
import { FeatureGrid } from '../../components/Features';
import { FormField, FormRow, FormMessage } from '../../components/Form';
import { CTASection } from '../../components/CTA';
import { IconPhone } from '../../components/commons/icons';

import contactInfo from '../../data/contactInfo';
import './contact.css';

const contactCards = [
  {
    id: 'address',
    icon: 'IconMapPin',
    title: 'Address',
    description: `${contactInfo.address.line1}\n${contactInfo.address.line2}\n${contactInfo.address.country}`,
  },
  {
    id: 'phone',
    icon: 'IconPhone',
    title: 'Phone',
    description: `Main: ${contactInfo.phoneMain}\nEmergency: ${contactInfo.phoneEmergency}`,
  },
  {
    id: 'email',
    icon: 'IconMail',
    title: 'Email',
    description: `${contactInfo.emailInfo}\n${contactInfo.emailAppointments}`,
  },
  {
    id: 'hours',
    icon: 'IconClock',
    title: 'Working Hours',
    description: contactInfo.hours.map((h) => `${h.days}: ${h.time}`).join('\n'),
  },
];

const initialFormState = { name: '', email: '', message: '' };

/**
 * Contact
 *
 * Phase 4 rebuild: replaces the old three-column Bootstrap layout and
 * hand-rolled `<i className="fas fa-*">` icons with FeatureGrid (info
 * cards), the shared Form components (form + validation), and
 * CTASection (emergency banner). Contact details come from
 * src/data/contactInfo.js, the same source Footer already reads from,
 * so there's a single place to update the practice's phone/address.
 */
const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Please enter a message.';
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      return;
    }

    // Real submission wiring (API call) goes here once a backend
    // endpoint exists — mirrors the pattern used on Appointment.
    setStatus('success');
    setFormData(initialFormState);
  };

  return (
    <div>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="We're here to help and answer any questions you may have."
      />

      <Section>
        <FeatureGrid
          items={contactCards}
          eyebrow="Reach Us"
          title="Contact Information"
          subtitle="Multiple ways to reach our team, whatever's most convenient for you."
          columns={4}
        />
      </Section>

      <Section tone="surface">
        <div className="contact-form-wrap">
          <Card className="contact-form-card">
            <h2 className="contact-form-card__title">Send Us a Message</h2>

            {status === 'success' && (
              <FormMessage tone="success">
                Thank you for your message! We'll get back to you soon.
              </FormMessage>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <FormRow>
                <FormField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  error={errors.name}
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  error={errors.email}
                />
              </FormRow>

              <FormField
                as="textarea"
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message here..."
                error={errors.message}
              />

              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="contact-map">
          <h2 className="contact-map__title">Find Us</h2>
          <div className="contact-map__frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Healthcare Center Location"
            />
          </div>
        </div>
      </Section>

      <CTASection
        tone="secondary"
        title="Need Immediate Assistance?"
        subtitle="For urgent medical concerns, our emergency line is staffed 24/7."
        actions={[
          {
            label: `Call ${contactInfo.phoneEmergency}`,
            href: `tel:${contactInfo.phoneEmergency.replace(/[^+\d]/g, '')}`,
            icon: IconPhone,
            variant: 'accent',
          },
        ]}
      />
    </div>
  );
};

export default Contact;