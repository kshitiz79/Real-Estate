import React, { useState, useEffect } from "react";
import './Header.css';
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adjust menu styles dynamically
  const getMenuStyles = () => {
    return window.innerWidth <= 768 ? {
      right: menuOpened ? "0" : "-100%",
      transition: "right 200ms ease-in-out",
    } : {};
  };

  // Handle window resize for mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpened(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Append form details for form submission service
    formData.append('_next', 'https://yourdomain.co/thanks.html');
    formData.append('_subject', 'New Form Submission!');
    formData.append('_captcha', 'false');
    formData.append('_autoresponse', 'Thank you for reaching out! We\'ll get back to you soon.');
    formData.append('_cc', 'teamrbsh@gmail.com');

    fetch('https://formsubmit.co/sales@propertyorbits.com', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormVisible(false);
      } else {
        alert('Error submitting the form.');
      }
    }).catch((error) => {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form.');
    });
  };

  return (
    <header className={`h-wrapper ${sticky ? 'sticky' : ''}`}>
      <nav className="flexCenter paddings innerWidth h-container">
        <a href="/" aria-label="Home">
          <img src="/logo.png" alt="RBSH Studio Logo" width={170} loading="lazy" />
        </a>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className={`flexCenter h-menu ${menuOpened ? 'show' : ''}`} style={getMenuStyles()}>
            <a href="#overview" aria-label="Overview Section">Overview</a>
            <a href="#popular" aria-label="Popular Section">Popular</a>
            <a href="#featured" aria-label="Residency Section">Residency</a>
            <a href="#contact" aria-label="Contact Us Section">Contact Us</a>
            <button className="button" onClick={() => setFormVisible(true)}>Contact</button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} aria-label="Toggle Menu" />
        </div>
      </nav>

      {formVisible && (
        <div className="popup-form">
          <OutsideClickHandler onOutsideClick={() => setFormVisible(false)}>
            <div className="form-container">
              <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <h2>Get in Touch With Us</h2>
                <label>
                  Name:
                  <input type="text" name="name" required aria-label="Name" />
                </label>
                <label>
                  Number:
                  <input type="text" name="number" required aria-label="Number" />
                </label>
                <label>
                  Requirement:
                  <select name="requirement" required aria-label="Requirement">
                    <option value="">Select Flat Type</option>
                    <option value="1bhk">1BHK</option>
                    <option value="2bhk">2BHK</option>
                    <option value="3bhk">3BHK</option>
                    <option value="4bhk">4BHK</option>
                  </select>
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          </OutsideClickHandler>
        </div>
      )}
    </header>
  );
};

export default Header;
