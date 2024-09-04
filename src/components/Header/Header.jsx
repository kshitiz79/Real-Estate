import React, { useState, useEffect } from "react";
import './Header.css';
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Function to handle sticky state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the scroll listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to dynamically adjust menu styles based on screen size and state
  const getMenuStyles = () => {
    if (window.innerWidth <= 768) {
      return {
        right: menuOpened ? "0" : "-100%",
        transition: "right 200ms ease",
      };
    }
    return {};
  };

  // Close the menu on resize if window width exceeds 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpened(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Adding hidden fields for FormSubmit configuration
    formData.append('_next', 'https://yourdomain.co/thanks.html');
    formData.append('_subject', 'New Form Submission!');
    formData.append('_captcha', 'false');
    formData.append('_autoresponse', 'Thank you for reaching out! We\'ll get back to you soon.');
    formData.append('_cc', 'teamrbsh@gmail.com'); 

    fetch('https://formsubmit.co/sales@propertyorbits.com', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormVisible(false);
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
    <header className={`h-wrapper ${sticky ? 'sticky' : ''}`}>
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="logo" width={170} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles()}>
            <a href="#overview">Overview</a>
            <a href="#popular">Popular</a>
            <a href="#featured">Residency</a>
            <a href="#contact">Contact Us</a>

            <button className="button" onClick={() => setFormVisible(true)}>
              Contact
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

      {formVisible && (
        <div className="popup-form">
          <OutsideClickHandler onOutsideClick={() => setFormVisible(false)}>
            <div className="form-container">
              <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <h2>Get in Touch With Us</h2>
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Number:
                  <input type="text" name="number" required />
                </label>
                <label>
                  Requirement:
                  <select name="requirement" required>
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
