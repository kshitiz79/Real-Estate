import React from "react";
import "./Footer.css";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import shareIcon from "../../assets/share.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
          {/* Left Side */}
          <div className="flexColStart f-left">
            <img src="./logo3.png" alt="Property Orbits Logo" width={250} />
            <div className="text paddings">
              <a href="tel:+919873961111" className="contact-link">
                <IoCall aria-label="Phone Icon" /> +91 9873961111
              </a>
              <br />
              <a href="mailto:sales@propertyorbits.com" className="contact-link">
                <SiGmail aria-label="Email Icon" /> sales@propertyorbits.com
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flexColStart f-right">
            <span className="primaryText">Address:</span>
            <span className="secondryText">
              B-720/721,<br /> Ithum Tower, Plot-A-40<br />
              Sector-62, Noida, UP, 201301
            </span>

            <Link to="/privacy-policy" className="privacy-button  ">
              Privacy & Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-left">
          <a
            href="https://propertyorbits.com/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            © Property Orbits 2024
          </a>
        </div>
        <div className="footer-right">
          <a
            href="https://rbshstudio.com"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed and Managed by RBSH Studio
            <img
              src={shareIcon}
              alt="Share Icon"
              className="share-icon"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
