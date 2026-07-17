/**
 * Mock data for the patient Dashboard.
 * Consumed by: pages/Dashboard
 * This stands in for a real "my account" API response — swap for a
 * fetched value once the backend endpoint exists, the shape below is
 * what the page expects.
 */
export const upcomingAppointments = [
  {
    id: 'apt-1',
    doctor: 'Dr. Amelia Carter',
    department: 'Cardiology',
    date: '2026-07-22',
    time: '10:00 AM',
    status: 'confirmed',
  },
  {
    id: 'apt-2',
    doctor: 'Dr. Marcus Lee',
    department: 'Orthopedics',
    date: '2026-08-03',
    time: '02:00 PM',
    status: 'pending',
  },
];

export const medicalHistory = [
  {
    id: 'rec-1',
    title: 'Annual Physical Exam',
    doctor: 'Dr. Amelia Carter',
    date: '2026-05-14',
    summary: 'Routine checkup — all vitals within normal range.',
  },
  {
    id: 'rec-2',
    title: 'Blood Panel Results',
    doctor: 'Dr. Daniel Osei',
    date: '2026-03-02',
    summary: 'Cholesterol slightly elevated — dietary follow-up recommended.',
  },
  {
    id: 'rec-3',
    title: 'X-Ray — Right Knee',
    doctor: 'Dr. Marcus Lee',
    date: '2026-01-19',
    summary: 'No fractures detected. Mild inflammation noted.',
  },
];

export const quickActions = [
  {
    id: 'book',
    icon: 'IconPlusCircle',
    title: 'Book Appointment',
    description: 'Schedule a visit with any of our specialists.',
    to: '/appointment',
  },
  {
    id: 'doctors',
    icon: 'IconUsers',
    title: 'Browse Doctors',
    description: 'View our full directory of medical professionals.',
    to: '/doctors',
  },
  {
    id: 'profile',
    icon: 'IconEdit',
    title: 'Update Profile',
    description: 'Keep your contact and insurance details current.',
    to: '/dashboard',
  },
  {
    id: 'logout',
    icon: 'IconLogOut',
    title: 'Log Out',
    description: 'Sign out of your account on this device.',
    to: '/login',
  },
];

const dashboard = {
  upcomingAppointments,
  medicalHistory,
  quickActions,
};

export default dashboard;