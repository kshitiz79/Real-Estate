import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO metadata
import './Overview.css'; // Import the CSS file for styling
import MessageForm from '../MessageForm/MessageForm'; // Import the MessageForm component

const Overview = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const [showMessageForm, setShowMessageForm] = useState(false); // State to control form visibility

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            content.classList.add('animate-content');
            image.classList.add('animate-image');
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation
      }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Handler to show the MessageForm
  const handleDownloadClick = () => {
    setShowMessageForm(true);
  };

  // Handler to close the MessageForm
  const handleCloseForm = () => {
    setShowMessageForm(false);
  };

  return (
    <>
      <Helmet>
        <title>Prateek Grand City - Rejuvenate. Recharge. Reimagine.</title>
        <meta 
          name="description" 
          content="Step into the world of Prateek Grand City, a modern township blending elegance and tranquility in Siddharth Vihar, Ghaziabad. Explore luxurious amenities including gardens, clubhouse, and more." 
        />
        <meta 
          name="keywords" 
          content="Prateek Grand City, township in Ghaziabad, luxury residential property, modern amenities, lush green landscapes, Siddharth Vihar real estate" 
        />
        <meta name="author" content="Prateek Group" />
        <meta 
          property="og:title" 
          content="Prateek Grand City - Modern Township in Ghaziabad" 
        />
        <meta 
          property="og:description" 
          content="Discover Prateek Grand City, a thoughtfully designed township offering luxurious amenities in Siddharth Vihar, Ghaziabad." 
        />
        <meta 
          property="og:image" 
          content="https://prateekgroup.com/images/prateek-grand-city-township-aerial-view.jpg" 
        />
        <meta 
          property="og:url" 
          content="https://prateekgroup.com/prateek-grand-city" 
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="overview" ref={sectionRef}>
        <h1 className="overview-heading">Overview</h1>
        <div className="content" ref={contentRef}>
          <h2>Rejuvenate. Recharge. Reimagine.</h2>
          <p>
            Step into the world of <strong>Prateek Grand City,</strong> a thoughtfully designed township that blends modern elegance with natural tranquility, situated in Siddharth Vihar, Ghaziabad. Indulge in a range of luxurious amenities including landscaped gardens, a clubhouse, swimming pool, fitness center, and dedicated children’s play areas.
          </p>
          <p>
            Embrace a vibrant lifestyle surrounded by lush greenery and contemporary conveniences, providing you with the perfect escape to refresh your mind and body. Discover your dream home at Prateek Grand City and experience a new standard of living.
          </p>
          <button className="download-btn" onClick={handleDownloadClick}>Download Brochure</button>
        </div>
        <div className="image-container5" ref={imageRef}>
          <img 
            src="r5.png" 
            alt="Aerial view of Prateek Grand City Township" 
            className="overview-image" 
          />
        </div>
        {/* Conditionally render MessageForm when showMessageForm is true */}
        {showMessageForm && <MessageForm isOpen={showMessageForm} onClose={handleCloseForm} />}
      </section>
    </>
  );
};

export default Overview;
