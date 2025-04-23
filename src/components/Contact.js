import React, { useState, useEffect } from 'react';

const Contact = () => {
  // Check if we need to load SweetAlert2
  useEffect(() => {
    // Create script element for SweetAlert2
    const sweetAlertScript = document.createElement('script');
    sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    sweetAlertScript.async = true;
    document.body.appendChild(sweetAlertScript);

    // Cleanup function
    return () => {
      document.body.removeChild(sweetAlertScript);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    
    // Use SweetAlert2 instead of alert
    if (window.Swal) {
      window.Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#000',
        background: '#fff',
        customClass: {
          confirmButton: 'sweet-confirm-button'
        }
      });
    }
    
    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section5" id="Contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-box">
          <h2>Let's Work Together</h2>
          <p className="desc1">
            To contact us, enter your personal information and enter a message with your request, evaluation, or the like.
            <br /><br />Thank you.
          </p>
          <div className="contact-detail">
            <img src="./pic/cont.png" alt="contact" width={200} height={200}/>
          </div>
        </div>

        <div className="contact-box1">
          <form onSubmit={handleSubmit}>
            <h2 className="heading">Contact <span>Me!</span></h2>
            <div className="field-box">
              <div className="cont">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Email Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cont1">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  cols="50"
                  rows="9"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="cont2">
                <input type="submit" className="btn" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;