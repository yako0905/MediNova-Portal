/**
 * Content for the Appointment page that isn't already covered by
 * src/data/services.js (departments) or src/data/doctors.js (doctor
 * selection).
 * Consumed by: pages/Appointment
 */
export const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

export const importantInfo = [
  {
    id: 'hours',
    icon: 'IconClock',
    title: 'Appointment Hours',
    description: 'Monday - Friday: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 6:00 PM\nSunday: 10:00 AM - 4:00 PM',
  },
  {
    id: 'emergency',
    icon: 'IconPhone',
    title: 'Emergency Contact',
    description: 'For emergencies, call:\n+1 (555) 999-8888\n24/7 Emergency Services',
  },
  {
    id: 'bring',
    icon: 'IconFileText',
    title: 'What to Bring',
    description: 'Photo ID\nInsurance Card\nList of Current Medications\nPrevious Medical Records',
  },
  {
    id: 'arrival',
    icon: 'IconAlertCircle',
    title: 'Arrival Time',
    description: 'Please arrive 15 minutes before your scheduled appointment time to complete paperwork and registration.',
  },
];

const appointmentInfo = {
  timeSlots,
  importantInfo,
};

export default appointmentInfo;
