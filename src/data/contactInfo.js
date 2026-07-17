/**
 * Single source of truth for the practice's contact details.
 * Consumed by: components/Footer (Phase 3), pages/Contact and
 * pages/Appointment (Phase 4).
 */
export const contactInfo = {
  phoneMain: '+1 (555) 123-4567',
  phoneEmergency: '+1 (555) 999-8888',
  emailInfo: 'info@healthcare.com',
  emailAppointments: 'appointments@healthcare.com',
  address: {
    line1: '123 Medical Center Drive',
    line2: 'Healthcare City, HC 12345',
    country: 'United States',
  },
  hours: [
    { days: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
    { days: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { days: 'Sunday', time: '10:00 AM - 4:00 PM' },
  ],
};

export default contactInfo;
