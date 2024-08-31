import React from 'react';
import './FeaturedProperties.css';
import data from '../../utils/slider2.json';

const FeaturedProperties = () => {
  return (
    <section id="featured" className="featured-properties">
      <div className="paddings innerWidth">
        <div className="flexColStart r-head">
          <span className="orangeText">Top Picks</span>
          <span className="primaryText">Featured Properties</span>
        </div>
        <div className="property-grid">
          {data.map((property, index) => (
            <a
              key={index}
              href={property.link}
              target="_blank"
              rel="noopener noreferrer"
              className="property-card"
              style={{ '--card-index': index }}
            >
              <img src={property.image} alt={property.name} />
              <span className="secondaryText property-price">
                <span style={{ color: 'orange' }}>Rs </span>
                <span>{property.price}</span>
              </span>
              <span className="primaryText">{property.name}</span>
              <span className="secondaryText">{property.detail}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
