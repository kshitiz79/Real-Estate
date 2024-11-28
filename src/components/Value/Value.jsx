import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Value.css";

const Value = () => {
  return (
    <section id="value" className="v-wrapper" role="region" aria-label="Value section">
      {/* Meta tags for SEO */}
      <Helmet>
        <title>Value We Provide - Trusted Real Estate Services | Property Orbits</title>
        <meta
          name="description"
          content="Discover the value we provide at Property Orbits. Our mission is to help you find the perfect home that enhances your well-being and living experience."
        />
        <meta
          name="keywords"
          content="Property Orbits, real estate services, value, find home, trusted real estate, comfortable living"
        />
        <meta property="og:title" content="Value We Provide - Trusted Real Estate Services" />
        <meta
          property="og:description"
          content="Discover the value we provide at Property Orbits. Our mission is to help you find the perfect home that enhances your well-being and living experience."
        />
        <meta property="og:url" content="https://propertyorbits.com/value" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://propertyorbits.com/path-to-your-image.jpg" />
      </Helmet>

      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="Illustration representing the value we provide" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <h1 className="primaryText">Value We Provide to Our Customers</h1>

          <p className="secondaryText">
            Our goal is to assist you in finding the perfect place to call home.
            We understand that a comfortable living environment can positively impact
            your well-being.
          </p>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem className="accordionItem" uuid={i} key={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <div
                            className={`flexCenter icon ${
                              expanded ? 'expanded' : 'collapsed'
                            }`}
                          >
                            {item.icon}
                          </div>
                          <h3 className="primaryText2">{item.heading}</h3>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
