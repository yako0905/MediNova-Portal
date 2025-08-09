import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="hero-content">
                <h1>Your Health, Our Priority</h1>
                <p className="lead">
                  Providing exceptional healthcare services with state-of-the-art technology 
                  and compassionate care. Your well-being is our mission.
                </p>
                <Link to="/appointment" className="btn btn-light btn-lg me-3">
                  Book Appointment
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-3">Why Choose Us?</h2>
              <p className="lead text-muted">
                We are committed to providing the highest quality healthcare services 
                with a focus on patient comfort and satisfaction.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-user-md fa-2x text-primary"></i>
                </div>
                <h5>Expert Doctors</h5>
                <p className="text-muted">
                  Our team consists of highly qualified and experienced medical professionals 
                  dedicated to your health and well-being.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-hospital fa-2x text-primary"></i>
                </div>
                <h5>Modern Facilities</h5>
                <p className="text-muted">
                  State-of-the-art medical equipment and facilities to ensure 
                  accurate diagnosis and effective treatment.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <i className="fas fa-heart fa-2x text-primary"></i>
                </div>
                <h5>Patient Care</h5>
                <p className="text-muted">
                  Compassionate and personalized care approach ensuring 
                  every patient feels valued and well-cared for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-3">Our Services</h2>
              <p className="lead text-muted">
                Comprehensive healthcare services to meet all your medical needs.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card specialty-card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  className="card-img-top" 
                  alt="Cardiology"
                />
                <div className="card-body">
                  <h5 className="card-title">Cardiology</h5>
                  <p className="card-text">Expert heart care and cardiovascular treatments.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card specialty-card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112c8b0aee1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  className="card-img-top" 
                  alt="Neurology"
                />
                <div className="card-body">
                  <h5 className="card-title">Neurology</h5>
                  <p className="card-text">Specialized care for neurological conditions.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card specialty-card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  className="card-img-top" 
                  alt="ENT"
                />
                <div className="card-body">
                  <h5 className="card-title">ENT</h5>
                  <p className="card-text">Ear, nose, and throat specialist care.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card specialty-card h-100">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  className="card-img-top" 
                  alt="General Medicine"
                />
                <div className="card-body">
                  <h5 className="card-title">General Medicine</h5>
                  <p className="card-text">Comprehensive primary care services.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <Link to="/about" className="btn btn-primary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-3">Ready to Get Started?</h2>
              <p className="lead mb-4">
                Book your appointment today and take the first step towards better health.
              </p>
              <Link to="/appointment" className="btn btn-light btn-lg">
                Book Your Appointment Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 