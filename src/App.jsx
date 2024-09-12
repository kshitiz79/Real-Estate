import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Residencies from './components/Residencies/Residencies';
import FeaturedProperties from './components/FeaturedProperties/FeaturedProperties';
import Value from './components/Value/Value';
import Owner from './components/Owners/Owner';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Overview from './components/Overview/Overview';
import VideoSection from './components/VIdeoSection/VideoSection';
import CallButton from './components/Callbutton/CallButton';
import MessageButton from './components/MessageButton/MessageButton';
import MessageForm from './components/MessageForm/MessageForm';



function App() {
  const [isMessageFormOpen, setIsMessageFormOpen] = useState(false);

  const handleOpenForm = () => setIsMessageFormOpen(true);
  const handleCloseForm = () => setIsMessageFormOpen(false);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Overview />
      <VideoSection />
      <Residencies />
      <FeaturedProperties />
      <Value />
      <div className="sliding-background">
        <Owner />
      </div>
      <Contact />
  
      <GetStarted />
      <Footer />

      {/* Add the Fixed Buttons */}
      <CallButton />
      <MessageButton onClick={handleOpenForm} />

      {/* Message Form Modal */}
      <MessageForm isOpen={isMessageFormOpen} onClose={handleCloseForm} />
      
    </div>
  );
}

export default App