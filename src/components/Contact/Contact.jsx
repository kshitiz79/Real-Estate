import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
   
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
          We are always ready to help by providing the best services for you. We believe a good place to live can make your life better.{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">9873961111</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="tel:+919873961111">
    Call Us 
  </a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Text</span>
                    <span className="secondaryText">9873961111</span>
                  </div>
                </div>
                <div className="flexCenter button">Text Us</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Whatsapp</span>
                    <span className="secondaryText">9873961111</span>
                  </div>
                </div>
                <div className="flexCenter button"><a href="https://wa.me/9873961111" target="_blank" rel="noopener noreferrer">
    Whatsapp Us
  </a></div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail </span>
                    <span className="secondaryText">sales@p..</span>
                  </div>
                </div>
                <div className="flexCenter button"> <a href="mailto:sales@propertyorbits.com">Mail us</a></div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container2">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;