import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const form = useRef();

  const handleSearch = () => {
    if (location.trim()) {
      const searchQuery = encodeURIComponent(location);
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${searchQuery}`,
        "_blank"
      );
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_8tpkzl5", "template_xsqdxx8", form.current, "cOgeWE_ZecC61i1YX")
      .then(
        () => {
          setLoading(false);
          navigate("/thanks"); // Redirect to thank-you page
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="hero-wrapper">
      <Helmet>
        <title>Discover Your Dream Home | Property Orbits</title>
        <meta
          name="description"
          content="Explore premium ready-to-move-in flats starting at 1.5 cr. Choose from multiple flat types and get in touch with us to find your dream home."
        />
        <meta name="keywords" content="Ready to move-in flats, 1.5 cr flats, premium real estate, home buying, real estate in cities" />
        <meta property="og:title" content="Discover Your Dream Home | Property Orbits" />
        <meta property="og:description" content="Find your ideal home with Property Orbits. Browse through our extensive listings of premium and affordable properties tailored to your needs." />
        <meta property="og:image" content="https://propertyorbits.com/images/hero-og-image.jpg" />
        <meta name="twitter:title" content="Discover Your Dream Home | Property Orbits" />
        <meta name="twitter:description" content="Find your ideal home with Property Orbits. Browse through our extensive listings of premium and affordable properties tailored to your needs." />
        <meta name="twitter:image" content="https://propertyorbits.com/images/hero-twitter-image.jpg" />
      </Helmet>

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
              type="tex"
              placeholder="Enter your name"
              required
              name="from_name"
            />
            <input
              type="tel"
              placeholder="Enter your number"
              required
              name="from_number"
              pattern="[0-9]{10}"
            />
            <input
              placeholder="Email"
              required
               type="email"
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