import React from 'react';

const About = () => {
  const specialties = [
    {
      id: 1,
      name: 'Cardiology',
      description: 'Expert heart care and cardiovascular treatments with state-of-the-art diagnostic equipment.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'fas fa-heartbeat'
    },
    {
      id: 2,
      name: 'Neurology',
      description: 'Specialized care for neurological conditions with advanced treatment protocols.',
      image: 'https://images.unsplash.com/photo-1576091160399-112c8b0aee1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'fas fa-brain'
    },
    {
      id: 3,
      name: 'ENT',
      description: 'Comprehensive ear, nose, and throat care with specialized surgical procedures.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'fas fa-ear'
    },
    {
      id: 4,
      name: 'Orthopedics',
      description: 'Advanced orthopedic care including joint replacement and sports medicine.',
      image: 'https://images.unsplash.com/photo-1576091160399-112c8b0aee1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'fas fa-bone'
    },
    {
      id: 5,
      name: 'Dermatology',
      description: 'Comprehensive skin care and treatment for various dermatological conditions.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'fas fa-user-md'
    },
    {
      id: 6,
      name: 'Pediatrics',
      description: 'Specialized care for children with a child-friendly environment and expert pediatricians.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: 'fas fa-baby'
    }
  ];

  return (
    <div>
      {/* About Hero */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="mb-4">About HealthCare Center</h1>
              <p className="lead">
                Dedicated to providing exceptional healthcare services with compassion and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="about-content">
                <h2 className="mb-4">Our Story</h2>
                <p>
                  Founded in 1995, HealthCare Center has been at the forefront of medical excellence 
                  for over 25 years. Our journey began with a simple mission: to provide accessible, 
                  high-quality healthcare to our community.
                </p>
                <p>
                  Today, we are proud to be one of the leading healthcare institutions in the region, 
                  serving thousands of patients with state-of-the-art medical facilities and a team 
                  of highly qualified healthcare professionals.
                </p>
                <p>
                  Our commitment to patient care goes beyond medical treatment. We believe in treating 
                  each patient with dignity, respect, and compassion, ensuring that every individual 
                  receives personalized care tailored to their specific needs.
                </p>
                
                <h3 className="mt-5 mb-4">Our Mission</h3>
                <p>
                  To provide exceptional healthcare services that improve the quality of life for our 
                  patients and their families, while maintaining the highest standards of medical 
                  excellence and patient safety.
                </p>
                
                <h3 className="mt-5 mb-4">Our Vision</h3>
                <p>
                  To be the most trusted healthcare provider in our community, known for our 
                  commitment to innovation, excellence, and compassionate care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-3">Our Specialties</h2>
              <p className="lead text-muted">
                Comprehensive medical services across various specialties to meet all your healthcare needs.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {specialties.map((specialty) => (
              <div key={specialty.id} className="col-md-6 col-lg-4">
                <div className="card specialty-card h-100">
                  <img 
                    src={specialty.image} 
                    className="card-img-top" 
                    alt={specialty.name}
                  />
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <i className={`${specialty.icon} fa-2x text-primary me-3`}></i>
                      <h5 className="card-title mb-0">{specialty.name}</h5>
                    </div>
                    <p className="card-text">{specialty.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="fas fa-user-md fa-2x text-primary"></i>
              </div>
              <h3 className="text-primary">50+</h3>
              <p className="text-muted">Expert Doctors</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="fas fa-users fa-2x text-primary"></i>
              </div>
              <h3 className="text-primary">10,000+</h3>
              <p className="text-muted">Happy Patients</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="fas fa-calendar-check fa-2x text-primary"></i>
              </div>
              <h3 className="text-primary">25+</h3>
              <p className="text-muted">Years of Service</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                <i className="fas fa-award fa-2x text-primary"></i>
              </div>
              <h3 className="text-primary">15+</h3>
              <p className="text-muted">Medical Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 