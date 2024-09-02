import React, { useState } from "react";
import './Header.css';
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 768) {
      return {
        right: menuOpened ? "0" : "-100%", // Slide menu in/out based on state
        transition: "right 200ms ease",
      };
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const requirement = form.requirement.value;
    const message = `Name: ${name} Number: ${number} Requirement: ${requirement}`;

    window.open(`https://wa.me/9873961111?text=${encodeURIComponent(message)}`, '_blank');
    setFormVisible(false);
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="logo" width={170} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div
            className="flexCenter h-menu"
            style={getMenuStyles()}
          >
            <a href="">Overview</a>
            <a href="#popular">Popular</a>
            <a href="#featured">Residency</a>
            <a href="#contact">Contact Us</a>

            <button className="button">
              <a onClick={() => setFormVisible(true)} href="#contact-us">Contact</a>
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
        <form onSubmit={handleFormSubmit}>
          <h2>Contact Us</h2>
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
    </section>
  );
};

export default Header;
