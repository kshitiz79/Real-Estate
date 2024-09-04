import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CallButton from './components/Callbutton/CallButton';
import MessageButton from './components/MessageButton/MessageButton';
import MessageForm from './components/MessageForm/MessageForm';

// Lazy load components to improve performance
const Hero = lazy(() => import('./components/Hero/Hero'));
const Companies = lazy(() => import('./components/Companies/Companies'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Residencies = lazy(() => import('./components/Residencies/Residencies'));
const FeaturedProperties = lazy(() => import('./components/FeaturedProperties/FeaturedProperties'));
const Value = lazy(() => import('./components/Value/Value'));
const Owner = lazy(() => import('./components/Owners/Owner'));
const GetStarted = lazy(() => import('./components/GetStarted/GetStarted'));
const Overview = lazy(() => import('./components/Overview/Overview'));
const VideoSection = lazy(() => import('./components/VIdeoSection/VideoSection'));

function App() {
  const [isMessageFormOpen, setIsMessageFormOpen] = useState(false);

  const handleOpenForm = () => setIsMessageFormOpen(true);
  const handleCloseForm = () => setIsMessageFormOpen(false);

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <Footer />

      {/* Fixed Buttons */}
      <CallButton />
      <MessageButton onClick={handleOpenForm} />

      {/* Message Form Modal */}
      <MessageForm isOpen={isMessageFormOpen} onClose={handleCloseForm} />
    </div>
  );
}

export default App;
