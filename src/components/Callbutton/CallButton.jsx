import React from 'react';
import './CallButton.css'; // Make sure to create this CSS file

const CallButton = () => {
  return (
    <a href="tel:+918127520552" className="call-button" aria-label="Call Us">
      📞
    </a>
  );
};

export default CallButton;
