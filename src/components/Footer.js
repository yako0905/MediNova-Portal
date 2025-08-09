import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>HealthCare Center</h5>
            <p>Your Health, Our Priority</p>
            <p>Providing quality healthcare services with compassion and excellence.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="/appointment" className="text-white text-decoration-none">Book Appointment</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p><i className="fas fa-phone me-2"></i> +1 (555) 123-4567</p>
            <p><i className="fas fa-envelope me-2"></i> info@healthcare.com</p>
            <p><i className="fas fa-map-marker-alt me-2"></i> 123 Medical Center Dr, City, State</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 HealthCare Center. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-end">
            <a href="#" className="text-white me-3"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 