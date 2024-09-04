import React, { useEffect, useRef, useState } from 'react';
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
    <section className="overview" ref={sectionRef}>
      <h1 className="overview-heading">Overview</h1>
      <div className="content" ref={contentRef}>
        <h2>Refresh. Recharge. Revive.</h2>
        <p>
          We are delighted to unveil <strong>Signum Parkwoods Estate Phase – II</strong> with exceptional amenities that offer a perfect blend of tranquility and modern convenience situated at the heart of <strong>Mankundu – Chandannagar</strong>. Enjoy a wealth of amenities, that include a Lifestyle Club, AC Gym, Steam Bath, Children’s Play Area, Swimming Pool, Amphitheatre, and a lot more.
        </p>
        <p>
          Discover a vibrant community designed to enhance your quality of life, surrounded by serene landscapes and contemporary comforts. Secure your dream home in Signum Parkwoods Phase II today.
        </p>
        <button className="download-btn" onClick={handleDownloadClick}>Download Brochure</button>
      </div>
      <div className="image-container5" ref={imageRef}>
        <img src="r1.png" alt="Signum Parkwoods" className="overview-image" />
      </div>
      {/* Conditionally render MessageForm when showMessageForm is true */}
      {showMessageForm && <MessageForm isOpen={showMessageForm} onClose={handleCloseForm} />}
    </section>
  );
};

export default Overview;
