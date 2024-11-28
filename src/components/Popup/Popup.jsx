import React, { useState, useRef } from 'react';
import './Popup.css';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

const Popup = ({ property, onClose }) => {
  const [formData, setFormData] = useState({
    reasonToBuy: '',
    isDealer: '', // Update to store the value 'Yes' or 'No'
    name: '',
    phone: '',
    buyTimeline: '',
    interestedInLoan: false,
  });

  const [loading, setLoading] = useState(false);
  const form = useRef();
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Ensure name and phone fields are filled
    if (!formData.name || !formData.phone || !formData.reasonToBuy || !formData.buyTimeline) {
      alert('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    const emailData = {
      from_name: formData.name,
      from_number: formData.phone,
      city: formData.city || 'Not specified',
      contact_reason: formData.reasonToBuy,
      property_name: property.name,
      reason: formData.reasonToBuy,
      property_dealer: formData.isDealer, // Ensure we're sending 'Yes' or 'No'
      month: formData.buyTimeline,
    };

    emailjs
      .send('service_8tpkzl5', 'template_xsqdxx8', emailData, 'cOgeWE_ZecC61i1YX')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setLoading(false);
          onClose(); // Close popup after successful submission
          navigate("/thanks"); // Redirect to "thanks" page
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('There was an error submitting the form.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-popup" onClick={onClose}>
          &times;
        </button>

        <h2 className="popup-title">{property.name}</h2>

        {/* Contact options */}
        <div className="contact-options">
          <a href="tel:9873961111" className="contact-option">
            Contact Owner - Call
          </a>
          <a
            href={`https://wa.me/919873961111?text=${encodeURIComponent(
              'Hello, I am interested in this property.'
            )}`}
            className="contact-option"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Phone No. - WhatsApp
          </a>
        </div>

        {/* Free Site Visit Form */}
        <form ref={form} onSubmit={handleSubmit} className="site-visit-form">
          <h3>Free Site Visit</h3>

          <label>Reason to buy:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="reasonToBuy"
                value="Investment"
                checked={formData.reasonToBuy === 'Investment'}
                onChange={handleChange}
              />
              Investment
            </label>
            <label>
              <input
                type="radio"
                name="reasonToBuy"
                value="Self Use"
                checked={formData.reasonToBuy === 'Self Use'}
                onChange={handleChange}
              />
              Self Use
            </label>
          </div>

          <label>Are you a property dealer?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="isDealer"
                value="Yes"
                checked={formData.isDealer === 'Yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="isDealer"
                value="No"
                checked={formData.isDealer === 'No'}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Your Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>By when are you planning to buy the property?</label>
          <select
            name="buyTimeline"
            value={formData.buyTimeline}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="More than 6 months">More than 6 months</option>
          </select>

          <label>
            <input
              type="checkbox"
              name="interestedInLoan"
              checked={formData.interestedInLoan}
              onChange={handleChange}
            />
            I am interested in a home loan
          </label>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
