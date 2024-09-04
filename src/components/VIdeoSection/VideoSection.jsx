// src/components/VideoSection/VideoSection.jsx
import React, { useState } from 'react';
import './VideoSection.css'; // Import the CSS file for styling
import MessageForm from '../MessageForm/MessageForm'; // Ensure the path is correct

const VideoSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to handle the click event to open the form
  const handleEnquireClick = () => {
    setIsFormOpen(true);
  };

  // Function to handle closing the form
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="video-section">
      <h2 className="video-heading">#PropertyOrbits</h2>
      <div className="video-container">
        <video controls autoPlay loop muted className="video-player">
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="enquire-btn" onClick={handleEnquireClick}>
        Enquire Now
      </button>

      {/* Render the MessageForm component when isFormOpen is true */}
      <MessageForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </section>
  );
};

export default VideoSection;

