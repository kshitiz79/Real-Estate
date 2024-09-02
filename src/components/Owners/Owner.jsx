// FounderSection.jsx
import React from 'react';
import './Owner.css'; // Import the CSS file for styling

const FounderSection = () => {
  return (
    <div className="founder-section">
      <div className="founder-card">
        <img
          src="./t5.jpg" // Replace with Amarjeet's image URL
          alt="Amarjeet Kumar"
          className="founder-image"
        />
        <h3>Amarjeet Kumar</h3>
        <h4>Founder</h4>
        <p>
          Amarjeet Kumar is a dynamic and accomplished professional with over 20
          years of experience, bringing a diverse array of skills and a proven
          track record of success across various industries, including Real
          Estate and Insurance. His expertise spans Customer Relationship
          Management, Media Planning, Brand Promotion, Marketing Strategy, Sales
          Presentations, Project Management, Operations Management, Quality
          Control, Team Leadership, and Client Servicing. Amarjeet has
          consistently driven business excellence by developing innovative
          procedures and service standards that enhance performance and foster
          sustainable growth.
        </p>
        <p>
          Renowned for his strong interpersonal skills and effective
          communication, Amarjeet excels at building and nurturing lasting
          relationships, ensuring seamless collaboration across teams and
          stakeholders. His organizational prowess and strategic mindset enable
          him to tackle challenges with a detail-oriented, adaptive approach,
          always focused on achieving optimal outcomes. A forward-thinking
          leader, Amarjeet is committed to innovation and continuous
          improvement, constantly exploring new ways to elevate productivity and
          streamline operations, making him an invaluable asset to any
          organization poised for growth and success.
        </p>
      </div>
      <div className="founder-card">
        <img
          src="t6.jpg" // Replace with Vikas's image URL
          alt="Vikas Maheshwari"
          className="founder-image"
        />
        <h3>Vikas Maheshwari</h3>
        <h4>Co-Founder</h4>
        <p>
          Mr. Vikas Maheshwari is a distinguished co-founder with a remarkable
          career spanning over two decades in the healthcare sector. Throughout
          his journey, Vikas has held various mid and top-management roles
          within esteemed global corporations, where he has consistently
          demonstrated his expertise and leadership. Currently, he is at the
          forefront of innovation and transformation at Genus Healthcare
          Solution, driving the company's strategic vision and growth.
        </p>
        <p>
          Vikas's career is marked by significant contributions to industry
          leaders like Wipro, Eli Research, and Innodata, where he mastered the
          art of designing, customizing, and delivering high-quality products
          and services, meticulously tailored to address the unique needs of
          clients. His in-depth understanding of the healthcare industry is
          further strengthened by his MBA in Healthcare Services from SMU,
          equipping him with a strong foundation to lead in a rapidly evolving
          landscape.
        </p>
        <p>
          A forward-thinking leader, Vikas is committed to driving impactful
          change on a global scale. In an era where innovation is essential for
          progress, he remains focused on creating transformative solutions that
          resonate across the healthcare sector and beyond.
        </p>
      </div>
    </div>
  );
};

export default FounderSection;
