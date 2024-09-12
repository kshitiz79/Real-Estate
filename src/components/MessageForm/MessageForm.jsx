
import './MessageForm.css';
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MessageForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .sendForm("service_8tpkzl5", "template_xsqdxx8", form.current, {
        publicKey: "cOgeWE_ZecC61i1YX",
      })
      .then(
        () => {
          navigate("/thanks");
          setLoading(false)
          console.log("SUCCESS!");
        },
        (error) => {
          setLoading(false)
          console.log("FAILED...", error.text);
        }
      );
  };


  return (
    <div className="message-form-overlay">
      <div className="message-form-container">
        <div className="form-header">
          <img src="logo.png" alt="Parkwoods Logo" className="form-logo" />
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <h2 className="form-title">Get in touch with us</h2>
        <form ref={form} onSubmit={sendEmail}>
 
          <input
              type="text"
              placeholder="Enter your name"
              required
               className="form-input"
              name="from_name"
            />
            <input
              type="phone"
              placeholder="Enter your number"
              required
               className="form-input"
              name="from_number"
            />
            <input
              placeholder="Enter your City"
              required
               className="form-input"
              type="text"
              name="city"
            />


      
          <input disabled={loading}  className="form-submit-btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
