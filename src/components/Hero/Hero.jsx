import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (location.trim()) {
      const searchQuery = encodeURIComponent(location);
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${searchQuery}`,
        "_blank"
      );
    }
  };

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
    <section className="hero-wrapper">
      <div className="hero-background"></div>

      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Ready to Move-In <br /> Flats in 1.5cr
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
              <span style={{ color: "white" }}>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span style={{ color: "white" }}>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span style={{ color: "white" }}>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Cities</span>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flexCenter hero-right">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <h2>Get in Touch With Us</h2>
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="from_name"
            />
            <input
              type="phone"
              placeholder="Enter your number"
              required
              name="from_number"
            />
            <input
              placeholder="Enter your City"
              required
              type="text"
              name="city"
            />
            <input disabled={loading} className="button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;