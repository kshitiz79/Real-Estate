import React from "react";
import "./Footer.css";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo3.png" alt="" width={250} />
         
          <span className="text  paddings">     <IoCall /> +91 9873961111
          <br/><SiGmail /> sales@propertyorbits.com</span>
         
        </div>
       
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Address:</span>
          <span className="text2">B-720/721,<br/> Ithum Tower, Plot-A-40<br/>
          Sector-62, Noida, UP. 201301 </span>
       

        </div>
      </div>
    </div>
  );
};

export default Footer;