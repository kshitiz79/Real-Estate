import React, { useState } from 'react';
import './FeaturedProperties.css';
import data from '../../utils/slider2.json';
import MessageForm from '../MessageForm/MessageForm'; // Import the MessageForm component

const FeaturedProperties = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to open the MessageForm
  const handleCardClick = () => {
    setIsFormOpen(true);
  };

  // Function to close the MessageForm
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section id="featured" className="featured-properties">
      <div className="paddings innerWidth">
        <div className="flexColStart r-head">
          <span className="orangeText">Top Picks</span>
          <span className="primaryText">Featured Properties</span>
        </div>
        <div className="property-grid">
          {data.map((property, index) => (
            <div
              key={index}
              className="property-card"
              style={{ '--card-index': index }}
              onClick={handleCardClick} // Open the form on card click
            >
              <img src={property.image} alt={property.name} />
              <span className="secondaryText property-price">
                <span style={{ color: 'orange' }}>Rs </span>
                <span>{property.price}</span>
              </span>
              <span className="primaryText">{property.name}</span>
              <span className="secondaryText">{property.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Render the MessageForm component */}
      <MessageForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </section>
  );
};

export default FeaturedProperties;
