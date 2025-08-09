import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    department: '',
    date: '',
    time: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    'Cardiology',
    'Neurology',
    'ENT',
    'Orthopedics',
    'Dermatology',
    'Pediatrics',
    'General Medicine',
    'Emergency Medicine'
  ];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5001/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          phoneNumber: '',
          department: '',
          date: '',
          time: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error connecting to server. Please try again.');
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      {/* Appointment Hero */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="mb-4">Book Your Appointment</h1>
              <p className="lead">
                Schedule your visit with our expert healthcare professionals. 
                We're here to provide you with the best medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-container">
                <h3 className="text-center mb-4">Appointment Booking Form</h3>
                
                {isSubmitted && (
                  <div className="alert alert-success text-center" role="alert">
                    <i className="fas fa-check-circle fa-2x mb-3"></i>
                    <h4>Appointment Booked Successfully!</h4>
                    <p className="mb-0">
                      Thank you for booking your appointment. We've sent a confirmation 
                      to your contact information. Please arrive 15 minutes before your scheduled time.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="department" className="form-label">Department *</label>
                      <select
                        className="form-select"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept, index) => (
                          <option key={index} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="date" className="form-label">Preferred Date *</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="time" className="form-label">Preferred Time *</label>
                    <select
                      className="form-select"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <i className="fas fa-calendar-check me-2"></i>
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="text-center mb-5">Important Information</h3>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <i className="fas fa-clock fa-3x text-primary mb-3"></i>
                      <h5>Appointment Hours</h5>
                      <p className="text-muted">
                        Monday - Friday: 8:00 AM - 8:00 PM<br />
                        Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <i className="fas fa-phone fa-3x text-primary mb-3"></i>
                      <h5>Emergency Contact</h5>
                      <p className="text-muted">
                        For emergencies, call:<br />
                        <strong>+1 (555) 999-8888</strong><br />
                        24/7 Emergency Services
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <i className="fas fa-file-medical fa-3x text-primary mb-3"></i>
                      <h5>What to Bring</h5>
                      <p className="text-muted">
                        • Photo ID<br />
                        • Insurance Card<br />
                        • List of Current Medications<br />
                        • Previous Medical Records
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center">
                      <i className="fas fa-clock fa-3x text-primary mb-3"></i>
                      <h5>Arrival Time</h5>
                      <p className="text-muted">
                        Please arrive 15 minutes before your scheduled appointment time to complete necessary paperwork and registration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="mb-4">Need Immediate Assistance?</h3>
              <p className="lead text-muted mb-4">
                If you have urgent medical concerns or need to speak with someone immediately, 
                please don't hesitate to contact us.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="tel:+15551234567" className="btn btn-primary btn-lg">
                  <i className="fas fa-phone me-2"></i>
                  Call Us Now
                </a>
                <a href="/contact" className="btn btn-outline-primary btn-lg">
                  <i className="fas fa-envelope me-2"></i>
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment; 