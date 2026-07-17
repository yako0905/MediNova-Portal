/**
 * Doctor directory.
 * Consumed by: components/Doctors (Featured Doctors on Home)
 * Later consumed by: pages/Doctors, pages/DoctorDetails once implemented.
 */
export const doctors = [
  {
    id: 'dr-amelia-carter',
    name: 'Dr. Amelia Carter',
    specialty: 'Cardiology',
    bio: 'Board-certified cardiologist with 15 years of experience in interventional cardiology.',
    photo: '/assets/images/doctors/amelia-carter.jpg',
    available: true,
  },
  {
    id: 'dr-daniel-osei',
    name: 'Dr. Daniel Osei',
    specialty: 'Neurology',
    bio: 'Specializes in neurodegenerative disorders and advanced diagnostic neurology.',
    photo: '/assets/images/doctors/daniel-osei.jpg',
    available: true,
  },
  {
    id: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    specialty: 'Pediatrics',
    bio: 'Dedicated pediatrician focused on preventive care and childhood development.',
    photo: '/assets/images/doctors/priya-nair.jpg',
    available: false,
  },
  {
    id: 'dr-marcus-lee',
    name: 'Dr. Marcus Lee',
    specialty: 'Orthopedics',
    bio: 'Orthopedic surgeon specializing in sports medicine and joint replacement.',
    photo: '/assets/images/doctors/marcus-lee.jpg',
    available: true,
  },
];

export default doctors;
