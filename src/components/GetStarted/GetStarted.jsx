import React, { useState } from 'react';
import './GetStarted.css';
import MessageForm from '../MessageForm/MessageForm'; // Update path if necessary

const GetStarted = () => {
  // State to manage form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to open the form
  const openForm = () => setIsFormOpen(true);

  // Function to close the form
  const closeForm = () => setIsFormOpen(false);

  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Let's Begin With Property Orbits</span>
          <span className="secondaryText">
            Join Us Today to Find Super Attractive <br /> Real Estate Opportunities!
          </span>
          <span>
            <button className="button" onClick={openForm}>
              Let's Begin
            </button>
          </span>
        </div>
      </div>
      {/* Include MessageForm and pass necessary props */}
      <MessageForm isOpen={isFormOpen} onClose={closeForm} />
    </section>
  );
};

export default GetStarted;
