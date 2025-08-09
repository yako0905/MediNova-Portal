import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {/* Contact Hero */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="mb-4">Contact Us</h1>
              <p className="lead">
                Get in touch with us. We're here to help and answer any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-4 mb-4">
              <div className="contact-info">
                <h5><i className="fas fa-map-marker-alt me-2"></i>Address</h5>
                <p>123 Medical Center Drive<br />
                Healthcare City, HC 12345<br />
                United States</p>
                
                <h5 className="mt-4"><i className="fas fa-phone me-2"></i>Phone</h5>
                <p>Main: +1 (555) 123-4567<br />
                Emergency: +1 (555) 999-8888</p>
                
                <h5 className="mt-4"><i className="fas fa-envelope me-2"></i>Email</h5>
                <p>info@healthcare.com<br />
                appointments@healthcare.com</p>
                
                <h5 className="mt-4"><i className="fas fa-clock me-2"></i>Hours</h5>
                <p>Monday - Friday: 8:00 AM - 8:00 PM<br />
                Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="form-container">
                <h3 className="mb-4">Send us a Message</h3>
                
                {isSubmitted && (
                  <div className="alert alert-success" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Enter your message here..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h3 className="mb-4">Find Us</h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Healthcare Center Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="text-center mb-5">Frequently Asked Questions</h3>
              
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      How do I book an appointment?
                    </button>
                  </h2>
                  <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You can book an appointment by calling us at +1 (555) 123-4567, using our online booking system, or visiting our facility in person.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      What insurance plans do you accept?
                    </button>
                  </h2>
                  <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We accept most major insurance plans. Please contact our billing department for specific information about your insurance coverage.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                      Do you offer emergency services?
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, we provide emergency medical services 24/7. For emergencies, please call +1 (555) 999-8888 or visit our emergency department.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 