import React from "react";
import "./Footer.css";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import shareIcon from "../../../public/share.png";
const Footer = () => {
  return (
<>
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo3.png" alt="" width={250} />
         
          <span className="text paddings">
  <a href="tel:+919873961111">
    <IoCall /> +91 9873961111
  </a>
  <br />
  <a href="mailto:sales@propertyorbits.com">
    <SiGmail /> sales@propertyorbits.com
  </a>
</span>

         
        </div>
       
        <div className="flexColStart f-right">
         
          <span className="primaryText">Address:</span>
          <span className="secondryText">B-720/721,<br/> Ithum Tower, Plot-A-40<br/>
          Sector-62, Noida, UP. 201301 </span>
       

        </div>
      </div>

    </div>
    




    <div className="footer-container">
  <div className="footer-left">
    <a>© Property Orbits 2024</a>
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