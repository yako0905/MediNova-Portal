/**
 * Primary site navigation.
 * Consumed by: components/Navbar
 * The "Book Appointment" CTA is intentionally kept separate from this
 * list since it renders as a button, not a plain nav link.
 */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' },
];

export default navLinks;