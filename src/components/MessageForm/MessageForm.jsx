import React from 'react';
import './MessageForm.css';

const MessageForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Adding hidden fields for FormSubmit configuration
    formData.append('_next', 'https://yourdomain.co/thanks.html'); // Replace with your thank-you page URL
    formData.append('_subject', 'New Form Submission!'); // Email subject
    formData.append('_captcha', 'false'); // Disable captcha
    formData.append('_autoresponse', "Thank you for reaching out! We'll get back to you soon."); // Auto-response message
    formData.append('_cc', 'teamrbsh@gmail.com'); // CC the second email

    fetch('https://formsubmit.co/sales@propertyorbits.com', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');
          onClose(); // Close the form on successful submission
        } else {
          alert('There was an error submitting the form.');
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form.');
      });
  };

  return (
    <div className="message-form-overlay">
      <div className="message-form-container">
        <div className="form-header">
          <img src="logo.png" alt="Parkwoods Logo" className="form-logo" />
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <h2 className="form-title">Get in touch with us</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="form-input"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone No.*"
            className="form-input"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City*"
            className="form-input"
            required
          />

          {/* Hidden fields for FormSubmit */}
          <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />
          <input type="hidden" name="_subject" value="New Form Submission!" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for reaching out! We'll get back to you soon."
          />
          <input type="hidden" name="_cc" value="teamrbsh@gmail.com" />

          <button type="submit" className="form-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
