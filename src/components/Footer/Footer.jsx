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
         
          <span className="text  paddings">     <IoCall /> +91 9873961111
          <br/><SiGmail /> sales@propertyorbits.com</span>
         
        </div>
       
        <div className="flexColStart f-right">
         
          <span className="primaryText">Address:</span>
          <span className="secondryText">B-720/721,<br/> Ithum Tower, Plot-A-40<br/>
          Sector-62, Noida, UP. 201301 </span>
       

        </div>
      </div>

    </div>
    




<div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around", backgroundColor:"white",fontWeight:"bold",color: 'black',height:'50px' }} >

      <div >
    <a   >
  Copyright @ Property Orbits 2024

  </a>
  </div>
  <div>
  <a
  href="https://rbshstudio.com"
  className="threeDText"
  target="_blank"
  rel="noopener noreferrer"
>
  Designed and Managed by RBSH Studio
  <img
    src={shareIcon}
    alt="Share Icon"
    style={{ width: '20px', height: '20px', marginLeft: '8px' }} // Adjust margin as needed
  />
</a>
</div>

    </div> 
    
</>

  );
};

export default Footer;