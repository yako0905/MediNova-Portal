import React from 'react';
import { useParams } from 'react-router-dom';
import PageScaffold from '../../components/commons/PageScaffold';

const DoctorDetail = () => {
  const { id } = useParams();

  return (
    <PageScaffold
      eyebrow="Doctor Profile"
      title="Doctor Details"
      description={`Full profile, specialties, and booking options for doctor #${id ?? 'â€”'} will live here.`}
    />
  );
};

export default DoctorDetail;