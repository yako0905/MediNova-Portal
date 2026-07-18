import React, { useState, useEffect } from 'react';
import { PageHero, Section, Card, Button } from '../../components/commons';
import { FeatureGrid } from '../../components/Features';
import { FormField, FormRow, FormMessage } from '../../components/Form';
import { CTASection } from '../../components/CTA';
import { IconPhone, IconMail, IconCalendar } from '../../components/commons/icons';

import { departments } from '../../data/services';
import contactInfo from '../../data/contactInfo';
import { timeSlots, importantInfo } from '../../data/appointmentInfo';
import { apiRequest } from '../../utils/apiRequest';
import './appointment.css';

const initialFormState = {
  fullName: '',
  phoneNumber: '',
  department: '',
  doctorId: '',
  date: '',
  time: '',
};

/**
 * Appointment
 *
 * Phase 4 rebuild: replaces the old Bootstrap form (hardcoded
 * department array duplicating src/data/services.js, no doctor
 * selection, a raw fetch straight to localhost) with the shared Form
 * components, real client-side validation, and the apiRequest utility
 * so the API base URL stays configurable via REACT_APP_API_URL
 * instead of hardcoded per page.
 */
const Appointment = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [doctorOptions, setDoctorOptions] = useState([]);

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  useEffect(() => {
  const fetchDoctors = async () => {
    try {
      const response = await apiRequest("/doctors");

      const options = response.data.doctors.map((doctor) => ({
        value: doctor._id,
        label: `${doctor.name} — ${doctor.specialization}`,
      }));

      setDoctorOptions(options);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    }
  };

  fetchDoctors();
}, []);

  const validate = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    if (!formData.phoneNumber.trim()) {
      nextErrors.phoneNumber = 'Please enter a phone number.';
    } else if (!/^[\d()+\-\s]{7,}$/.test(formData.phoneNumber)) {
      nextErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    if (!formData.department) nextErrors.department = 'Please select a department.';
    if (!formData.doctorId) nextErrors.doctorId = 'Please select a doctor.';
    if (!formData.date) nextErrors.date = 'Please choose a date.';
    if (!formData.time) nextErrors.time = 'Please choose a time.';
    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      // Wired to the configurable API base URL (see src/config/env.js).
      // Falls back gracefully if no backend is running yet in dev.
     await apiRequest('/appointments', {
  method: 'POST',
  body: {
    patientName: formData.fullName,
    phone: formData.phoneNumber,
    department: formData.department,
    doctor: formData.doctorId,
    appointmentDate: formData.date,
    appointmentTime: formData.time,
  },
});
      setStatus('success');
      setFormData(initialFormState);
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Schedule a Visit"
        title="Book Your Appointment"
        subtitle="Schedule your visit with our expert healthcare professionals. We're here to provide you with the best medical care."
      />

      <Section>
        <div className="appointment-form-wrap">
          <Card className="appointment-form-card">
            <h2 className="appointment-form-card__title">Appointment Booking Form</h2>

            {status === 'success' && (
              <FormMessage tone="success">
                <h4>Appointment Booked Successfully!</h4>
                <p>
                  Thank you for booking your appointment. We've sent a confirmation to your
                  contact information. Please arrive 15 minutes before your scheduled time.
                </p>
              </FormMessage>
            )}

            {status === 'error' && (
              <FormMessage tone="error">
                <h4>Something Went Wrong</h4>
                <p>We couldn't reach the booking server. Please try again, or call us directly.</p>
              </FormMessage>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <FormRow>
                <FormField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  error={errors.fullName}
                />
                <FormField
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  error={errors.phoneNumber}
                />
              </FormRow>

              <FormRow>
                <FormField
                  as="select"
                  label="Department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  placeholder="Select Department"
                  options={departments}
                  error={errors.department}
                />
                <FormField
                  as="select"
                  label="Doctor"
                  name="doctorId"
                  value={formData.doctorId}
                  onChange={handleChange}
                  required
                  placeholder="Select Doctor"
                  options={doctorOptions}
                  error={errors.doctorId}
                />
              </FormRow>

              <FormRow>
                <FormField
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required
                  error={errors.date}
                />
                <FormField
                  as="select"
                  label="Preferred Time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  placeholder="Select Time"
                  options={timeSlots}
                  error={errors.time}
                />
              </FormRow>

              <div className="appointment-form-card__submit">
                <Button type="submit" size="lg" icon={IconCalendar} disabled={isSubmitting}>
                  {isSubmitting ? 'Booking…' : 'Book Appointment'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </Section>

      <Section tone="surface">
        <FeatureGrid
          items={importantInfo}
          eyebrow="Before You Arrive"
          title="Important Information"
          columns={4}
        />
      </Section>

      <CTASection
        title="Need Immediate Assistance?"
        subtitle="If you have urgent medical concerns or need to speak with someone immediately, please don't hesitate to contact us."
        actions={[
          {
            label: 'Call Us Now',
            href: `tel:${contactInfo.phoneMain.replace(/[^+\d]/g, '')}`,
            icon: IconPhone,
            variant: 'accent',
          },
          { label: 'Send Message', to: '/contact', icon: IconMail, variant: 'outline' },
        ]}
      />
    </div>
  );
};

export default Appointment;