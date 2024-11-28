// src/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Layout = () => {
  return (
    <>

<Helmet>
        {/* Global Meta Tags */}
        <title>Property Orbits | Premium Housing at Affordable Price</title>
        <meta
          name="description"
          content="Discover premium housing at affordable prices with Property Orbits. Explore our range of properties tailored to meet your budget and lifestyle needs."
        />
        <link rel="canonical" href="https://propertyorbits.com/" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:title" content="Property Orbits | Premium Housing at Affordable Price" />
        <meta property="og:description" content="Explore premium housing options at affordable prices with Property Orbits. Find your dream home today!" />
        <meta property="og:image" content="https://propertyorbits.com/images/og-image.jpg" />
        <meta property="og:url" content="https://propertyorbits.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Property Orbits" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Property Orbits | Premium Housing at Affordable Price" />
        <meta name="twitter:description" content="Explore premium housing options at affordable prices with Property Orbits. Find your dream home today!" />
        <meta name="twitter:image" content="https://propertyorbits.com/images/twitter-image.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Property Orbits",
              "url": "https://propertyorbits.com/",
              "logo": "https://propertyorbits.com/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/propertyorbits",
                "https://www.instagram.com/property_orbits",
                "https://www.linkedin.com/company/propertyorbits"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98739-61111",
                "contactType": "Customer Service",
                "areaServed": "IN"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 62",
                "addressLocality": "Noida",
                "addressRegion": "UP",
                "postalCode": "201301",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            }
          `}
        </script>
      </Helmet>



    <div >

      <main >
        <Outlet /> 
      </main>

 
  
    </div>
    </>
  );
};

export default Layout;
