/**
 * Medical specialties / services offered.
 * Consumed by: components/Services (Home), components/Doctors/Departments (About)
 *
 * `icon` references a key from components/Common/icons.js so cards can
 * render <Icon /> without each data entry importing react-icons itself.
 */
export const services = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    description:
      'Expert heart care and cardiovascular treatments with state-of-the-art diagnostic equipment.',
    icon: 'IconHeartbeat',
    image: '/assets/images/services/cardiology.jpg',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    description: 'Specialized care for neurological conditions with advanced treatment protocols.',
    icon: 'IconPulse',
    image: '/assets/images/services/neurology.jpg',
  },
  {
    id: 'ent',
    name: 'ENT',
    description: 'Comprehensive ear, nose, and throat care with specialized surgical procedures.',
    icon: 'IconUser',
    image: '/assets/images/services/ent.jpg',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    description: 'Advanced orthopedic care including joint replacement and sports medicine.',
    icon: 'IconAward',
    image: '/assets/images/services/orthopedics.jpg',
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    description: 'Comprehensive skin care and treatment for various dermatological conditions.',
    icon: 'IconUser',
    image: '/assets/images/services/dermatology.jpg',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    description:
      'Specialized care for children with a child-friendly environment and expert pediatricians.',
    icon: 'IconUsers',
    image: '/assets/images/services/pediatrics.jpg',
  },
];

export const departments = services.map((s) => s.name);

export default services;
