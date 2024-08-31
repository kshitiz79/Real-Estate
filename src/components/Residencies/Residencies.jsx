import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from '../../utils/common';


const Residencies = () => {
  return (
   <section id="popular" className="r-wrapper" > 
 <div className="paddings innerWidth r-container">

 <div className="flexColStart r-head">
<span className="orangeText">Best Choices</span>
 <span className="primaryText">Popular Residencies</span>
 </div>
 <Swiper {...sliderSettings}>
    <SliderButtons/>
 {data.map((card, i) => (
    <SwiperSlide key={i}>
           <div className="flexColStart r-card">
           <img src={card.image} alt="home" />
           <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>Rs </span>
                  <span>{card.price}</span>
                </span>
                <a href={card.link} className="primaryText" target="_blank" rel="noopener noreferrer">
                  {card.name}
                </a>
                <span className="secondaryText">{card.detail}</span>
           </div>
    </SwiperSlide>

 ))
}

 </Swiper>
 </div>
   </section>
  )
}

export default Residencies;

const SliderButtons =() =>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
    )
}