import React from 'react';
import './Privacy.css'; // Ensure you have the correct CSS
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  return (
    <>
    <Helmet>
        <title>Privacy Policy | Property Orbits - Your Privacy Matters</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Property Orbits to understand how we handle your data and ensure your privacy."
        />
         <meta
          name="description"
          content="Understand how Property Orbits collects, uses, and safeguards your personal information. Our Privacy Policy outlines our commitment to protecting your privacy and data security."
        />
        <meta property="og:title" content="Privacy Policy | Property Orbits" />
        <meta property="og:description" content="Read the Privacy Policy of Property Orbits to understand how we handle your data and ensure your privacy." />
        <meta property="og:url" content="https://propertyorbits.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Privacy Policy | Property Orbits" />
        <meta name="twitter:description" content="Read the Privacy Policy of Property Orbits to understand how we handle your data and ensure your privacy." />
      </Helmet>
      
      <Header />
      <div className="privacy-container ">
        <main >
          <h1>Privacy Policy - Property Orbits</h1>
          <p>
            At Property Orbits, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with our website, services, and communications.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information to provide and improve our services:</p>
          <ul>
            <li><strong>Personal Information:</strong> When you contact us for property bookings, inquiries, or expert guidance, we may collect personal information such as your name, email address, phone number, and other contact details.</li>
            <li><strong>Property Preferences:</strong> Information related to your property preferences, requirements, or interests, to help us provide tailored real estate options.</li>
            <li><strong>Transactional Information:</strong> Records of transactions or communications with us, including booking history, property listings, or any other transactions you may have with Property Orbits.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Provide real estate services, including property listings, booking, and expert guidance.</li>
            <li>Communicate with you regarding inquiries, property updates, or other services you request.</li>
            <li>Customize our services to suit your property preferences and interests.</li>
            <li>Improve the user experience and functionality of our website.</li>
          </ul>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties unless required by law or with your consent.</p>

          <h2>3. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored securely, and we take steps to ensure that it is protected against unauthorized access or misuse.</p>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies to enhance your browsing experience and gather information about how you interact with our site. You can adjust your browser settings to disable cookies if you prefer.</p>

          <h2>5. Sharing Your Information</h2>
          <p>We may share your personal information with trusted third-party service providers to assist in delivering our services, such as real estate partners, agents, and booking platforms. These third parties are obligated to keep your information confidential and use it only for the purposes for which we provide it.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information.</li>
            <li>Request the deletion of your personal information, subject to applicable laws.</li>
            <li>Opt-out of receiving promotional communications by following the unsubscribe instructions in any email we send you.</li>
          </ul>

          <h2>7. Changes to Our Privacy Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and we encourage you to review it periodically to stay informed about how we are protecting your data.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:</p>
          <address>
            Property Orbits<br />
            Phone: +91 98739 61111<br />
            Email: propertyorbitsllp@gmail.com
          </address>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
