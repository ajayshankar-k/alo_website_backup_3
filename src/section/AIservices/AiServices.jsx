import React from "react";
import icon1 from "@/styles/assets/132.svg";
import icon2 from "@/styles/assets/133.svg";
import icon3 from "@/styles/assets/134.svg";
import icon4 from "@/styles/assets/135.svg";
import icon5 from "@/styles/assets/136.svg";
import icon6 from "@/styles/assets/137.svg";

const AiServices = () => {
  return (
    <div className="aiservices">
      <div className="aiservices_container">
        <h2>Our AI Services</h2>
        <div className="aiservices_card_container">
          <div className="aiservices_card_split">
            <img src={icon1.src} alt={icon1.src} />
            <h3>NLP Solutions</h3>
            <p>
              Empower your business tools with the ability to understand the
              context and emotions conveyed through spoken and written language.
              Partner with our team of NLP specialists to develop intelligent
              systems capable of accurately deciphering human language and
              behaviors, driving meaningful actions.
            </p>
          </div>
          <div className="aiservices_card_split">
            <img src={icon2.src} alt={icon2.src} />
            <h3>Computer Vision</h3>
            <p>
              Unlock the potential of your visual data with Computer Vision.
              Harness the power of image analysis to drive informed
              decision-making. Our bespoke Computer Vision applications are
              designed to decode imagery, uncover insights, and detect patterns,
              delivering tailored solutions to optimize your business
              operations.
            </p>
          </div>
          <div className="aiservices_card_split">
            <img src={icon3.src} alt={icon3.src} />
            <h3>Digital Virtual Assistants</h3>
            <p>
              Elevate your customer support efficiency with Digital Virtual
              Assistants. Free your representatives to handle inquiries
              requiring human touch by automating routine tasks.Our AI-driven
              virtual assistants excel in interpreting human language,
              discerning context, and delivering tailored customer interactions.
            </p>
          </div>
          <div className="aiservices_card_split">
            <img src={icon4.src} alt={icon1.src} />
            <h3>AI-Assisted Decision Making</h3>
            <p>
              Navigating the complexities of business decision-making can be a
              daunting task. Our AI-powered solutions simplify and automate this
              process for you. By integrating AI technology with business
              intelligence (BI) and analytics tools, we empower you to make
              informed and precise decisions with ease.
            </p>
          </div>
          <div className="aiservices_card_split">
            <img src={icon5.src} alt={icon1.src} />
            <h3>Cognitive Customer Analytics</h3>
            <p>
              Unlock a deeper understanding of your customers and drive smarter
              business decisions with our comprehensive cognitive analytics
              solutions. Our suite of customer analytics services enables you to
              anticipate customer actions, effectively segment your target
              audience, and mitigate churn, providing you with the insights
              needed to stay ahead in today&apos;s competitive market.
            </p>
          </div>
          <div className="aiservices_card_split">
            <img src={icon6.src} alt={icon1.src} />
            <h3>Recommendation Systems</h3>
            <p>
              Personalize your brand interaction to align with each customer&apos;s
              unique preferences. Our recommendation systems empower you to
              boost sales by providing tailored and pertinent suggestions,
              ensuring an individualized experience for every customer. With our
              expertise, you can optimize customer satisfaction and loyalty,
              driving sustainable growth for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiServices;
