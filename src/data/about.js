/**
 * Content for the About page.
 * Consumed by: pages/about
 * `icon` references a key from components/commons/icons.js.
 */
export const missionVision = [
  {
    id: 'mission',
    icon: 'IconTarget',
    title: 'Our Mission',
    description:
      'To provide exceptional healthcare services that improve the quality of life for our patients and their families, while maintaining the highest standards of medical excellence and patient safety.',
  },
  {
    id: 'vision',
    icon: 'IconEye',
    title: 'Our Vision',
    description:
      'To be the most trusted healthcare provider in our community, known for our commitment to innovation, excellence, and compassionate care.',
  },
];

export const whyChooseUs = [
  {
    id: 'expert-doctors',
    icon: 'IconUser',
    title: 'Expert Doctors',
    description:
      'Our team consists of highly qualified and experienced medical professionals dedicated to your health and well-being.',
  },
  {
    id: 'modern-facilities',
    icon: 'IconAward',
    title: 'Modern Facilities',
    description:
      'State-of-the-art medical equipment and facilities to ensure accurate diagnosis and effective treatment.',
  },
  {
    id: 'patient-care',
    icon: 'IconHeartbeat',
    title: 'Patient Care',
    description:
      'Compassionate and personalized care approach ensuring every patient feels valued and well cared for.',
  },
];

export const ourValues = [
  {
    id: 'integrity',
    icon: 'IconCheckCircle',
    title: 'Integrity',
    description: 'We hold ourselves to the highest ethical standards in every interaction.',
  },
  {
    id: 'compassion',
    icon: 'IconHeartbeat',
    title: 'Compassion',
    description: 'Every patient is treated with dignity, empathy, and genuine care.',
  },
  {
    id: 'excellence',
    icon: 'IconAward',
    title: 'Excellence',
    description: 'We continuously strive for the highest quality in medicine and service.',
  },
  {
    id: 'innovation',
    icon: 'IconPulse',
    title: 'Innovation',
    description: 'We invest in modern technology and techniques to improve patient outcomes.',
  },
];

const about = {
  missionVision,
  whyChooseUs,
  ourValues,
};

export default about;
