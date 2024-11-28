import React, { useState } from 'react';
import './FeaturedProperties.css';
import data from '../../utils/slider2.json';
import Popup from './../Popup/Popup'; // Import the Popup component

const FeaturedProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Function to handle card click and open popup
  const handleCardClick = (property) => {
    setSelectedProperty(property); // Set the selected property
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedProperty(null); // Deselect property to close popup
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
              onClick={() => handleCardClick(property)} // Open Popup on card click
            >
              <img src={property.image} alt={property.name} />
              <span className="secondaryText property-price">
              <h1 className="hidden-h1">Leading Real Estate Broker in Noida - Find Verified Properties</h1>
                <span style={{ color: 'orange' }}>Rs </span>
                <span>{property.price}</span>
              </span>
              <span className="primaryText">{property.name}</span>
              <span className="secondaryText">{property.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render Popup when a property is selected */}
      {selectedProperty && (
        <Popup 
          property={selectedProperty} 
          onClose={handleClosePopup} // Close the popup when needed
        />
      )}
    </section>
  );
};

export default FeaturedProperties;
