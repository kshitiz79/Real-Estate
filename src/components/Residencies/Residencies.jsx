import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from '../../utils/common';

// SliderButtons Component
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button 
        onClick={() => swiper.slidePrev()} 
        className="r-prevButton" 
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button 
        onClick={() => swiper.slideNext()} 
        className="r-nextButton" 
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

const Residencies = () => {
  // Function to redirect to WhatsApp on card click
  const handleCardClick = (cardName) => {
    const phoneNumber = '919873961111'; // WhatsApp number with country code
    const message = encodeURIComponent(`Hello, I am interested in the residency: ${cardName}.`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  // Handle key press for accessibility
  const handleKeyPress = (event, cardName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCardClick(cardName);
    }
  };

  return (
    <section id="popular" className="r-wrapper">
      {/* Meta tags for SEO */}
      <Helmet>
        <title>Buy Property in Noida | Residential & Commercial Listings | Property Orbits</title>
        <meta 
          name="description" 
          content="Explore a variety of residential and commercial properties for sale in Noida. Browse verified listings and find your perfect property within a 200 km radius." 
        />
        <meta 
          name="keywords" 
          content="Buy property Noida, residential properties Noida, commercial properties Noida, houses for sale Noida, apartments for sale Noida, plots for sale Noida" 
        />
        <meta property="og:title" content="Buy Property in Noida | Residential & Commercial Listings | Property Orbits" />
        <meta 
          property="og:description" 
          content="Explore a variety of residential and commercial properties for sale in Noida. Browse verified listings and find your perfect property within a 200 km radius." 
        />
        <meta property="og:url" content="https://propertyorbits.com/#featured" />
        <meta property="og:type" content="website" />

      </Helmet>

      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="flexColStart r-card"
                onClick={() => handleCardClick(card.name)}
                role="button"
                tabIndex="0"
                onKeyPress={(e) => handleKeyPress(e, card.name)}
              >
                <img src={card.image} alt={card.name} />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>Rs </span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
