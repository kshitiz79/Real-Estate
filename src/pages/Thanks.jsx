// src/pages/Thanks.jsx
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Thanks.css'; // Import the CSS file

const Thanks = () => {
  return (
    <div className="thanks-container">
      <Header />
      <main className="thanks-main">
        <div className="thanks-message">
          <h1>Thank You!</h1>
          <p>We appreciate your feedback and support.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Thanks;
