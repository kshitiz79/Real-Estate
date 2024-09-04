import React, { useState } from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    city: '',
  });

  // Function to handle the search button click
  const handleSearch = () => {
    if (location.trim()) {
      const searchQuery = encodeURIComponent(location);
      window.open(`https://www.google.com/maps/search/?api=1&query=${searchQuery}`, '_blank');
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formSubmitUrl = 'https://formsubmit.co/sales@propertyorbits.com';
    const formPayload = new FormData(e.target);

    // Adding hidden fields for FormSubmit configuration
    formPayload.append('_next', 'https://yourdomain.co/thanks.html'); // Redirect URL after submission
    formPayload.append('_subject', 'New Form Submission!'); // Subject of the email
    formPayload.append('_captcha', 'false'); // Disable captcha
    formPayload.append('_autoresponse', "Thank you for reaching out! We'll get back to you soon."); // Auto-response message
    formPayload.append('_cc', 'teamrbsh@gmail.com'); // CC the second email

    fetch(formSubmitUrl, {
      method: 'POST',
      body: formPayload,
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({ name: '', number: '', city: '' }); // Reset the form
        } else {
          alert('There was an error submitting the form.');
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Thanks For Submit');
      });
  };

  return (
    <section className="hero-wrapper">
      {/* Background slider */}
      <div className="hero-background"></div>

      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
         
            <motion.h1
              initial={{ y: '2rem', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: 'ease-in',
              }}
            >
              Connecting <br />
              You to
              <br /> Prime Properties
            </motion.h1>
          </div>
          <div className="flexColStart hero-des "></div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
            <button className="button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span style={{ color: 'white' }}>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span style={{ color: 'white' }}>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span style={{ color: 'white' }}>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Cities</span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flexCenter hero-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get in Touch With Us</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Enter your number"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter your City"
              required
            />

            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />
            <input type="hidden" name="_subject" value="New Form Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thank you for reaching out! We'll get back to you soon."
            />
            <input type="hidden" name="_cc" value="teamrbsh@gmail.com" />

            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
