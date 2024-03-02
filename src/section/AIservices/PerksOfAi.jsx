import React from "react";
import icon1 from "@/styles/assets/138.svg";
import icon2 from "@/styles/assets/139.svg";
import icon3 from "@/styles/assets/140.svg";
import icon4 from "@/styles/assets/141.svg";
import icon5 from "@/styles/assets/142.svg";
import icon6 from "@/styles/assets/143.svg";

const PerksOfAi = () => {
  return (
    <div className="perksofai">
      <div className="ai_perks_color">

      </div>
      <div className="perksofai_container">
        <div className="perksofai_wrapper">
        <h2>Perks of AI Technology</h2>
        <div className="perksai_cards">
          <div className="perksai_card_split">
            <img src={icon1.src} alt={icon1.src} />
            <h3>Increased Efficiency</h3>
            <p>
              AI technology streamlines processes automates repetitive tasks,
              and optimizes workflows, leading to enhanced productivity and
              resource utilization within organizations.
            </p>
          </div>
          <div className="perksai_card_split">
            <img src={icon2.src} alt={icon2.src} />
            <h3>Enhanced Decision-Making</h3>
            <p>
              By analyzing vast amounts of data quickly and accurately, AI
              empowers businesses to make informed decisions based on actionable
              insights, ultimately improving strategic planning and risk
              management.
            </p>
          </div>
          <div className="perksai_card_split">
            <img src={icon3.src} alt={icon3.src} />
            <h3>Improved Customer Experience</h3>
            <p>
              AI-powered solutions enable personalized interactions, predictive
              recommendations, and proactive customer service, resulting in
              higher satisfaction levels and stronger brand loyalty.
            </p>
          </div>
          <div className="perksai_card_split">
            <img src={icon4.src} alt={icon4.src} />
            <h3>Cost Savings</h3>
            <p>
              Through automation and optimization, AI technology helps reduce
              operational costs, minimize errors, and identify areas for
              cost-efficiency improvements, contributing to overall financial
              savings for businesses.
            </p>
          </div>
          <div className="perksai_card_split">
            <img src={icon5.src} alt={icon5.src} />
            <h3>Advanced Security</h3>
            <p>
              AI algorithms can detect and respond to security threats in real
              time, offering robust protection against cyber attacks, fraud, and
              data breaches, thereby safeguarding sensitive information and
              maintaining business continuity.
            </p>
          </div>
          <div className="perksai_card_split">
            <img src={icon6.src} alt={icon6.src} />
            <h3>Accelerated Innovation</h3>
            <p>
              AI fosters innovation by facilitating the development of new
              products, services, and solutions across various industries,
              driving competitive advantage, and positioning organizations for
              future growth and success.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PerksOfAi;
