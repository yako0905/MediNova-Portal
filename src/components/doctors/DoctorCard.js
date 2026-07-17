import React from 'react';
import { Card, Badge } from '../commons';
import './DoctorCard.css';

/**
 * DoctorCard
 *
 * Renders one entry from data/doctors.js. Uses an initials avatar
 * fallback (no photo asset exists yet — see data/doctors.js) so the
 * card never shows a broken image. Swaps in a real <img> automatically
 * once `photo` resolves to an actual file.
 */
const DoctorCard = ({ doctor }) => {
  const initials = doctor.name
    .replace('Dr. ', '')
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <Card hoverable className="doctor-card">
      <div className="doctor-card__avatar" aria-hidden="true">
        <span className="doctor-card__initials">{initials}</span>
      </div>
      <h3 className="doctor-card__name">{doctor.name}</h3>
      <Badge tone="primary">{doctor.specialty}</Badge>
      <p className="doctor-card__bio">{doctor.bio}</p>
      {doctor.available ? (
        <Badge tone="success">Available Today</Badge>
      ) : (
        <Badge tone="neutral">Fully Booked</Badge>
      )}
    </Card>
  );
};

export default DoctorCard;
