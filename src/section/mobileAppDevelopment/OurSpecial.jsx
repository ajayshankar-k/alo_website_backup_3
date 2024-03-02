import React from "react";
import icon1 from "@/styles/assets/83.svg";
import icon2 from "@/styles/assets/84.svg";
import icon3 from "@/styles/assets/85.svg";
import icon4 from "@/styles/assets/86.svg";
import icon5 from "@/styles/assets/87.svg";
import icon6 from "@/styles/assets/88.svg";
import icon7 from "@/styles/assets/89.svg";
import icon8 from "@/styles/assets/90.svg";

const OurSpecial = () => {
  return (
    <div className="ourspecial">
      <h2 className="ourspecial_title">Our Specialization</h2>
      <div className="ourspecial_cards_container">
        <div className="ourspecial_cards_split ourspecial_split_one">
          <img src={icon1.src} alt={icon1.src} />
          <p>Finance</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_two">
          <img src={icon2.src} alt={icon2.src} />
          <p>Education</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_three">
          <img src={icon3.src} alt={icon3.src} />
          <p>Social Network</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_four">
          <img src={icon4.src} alt={icon4.src} />
          <p>E-Commerce</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_five">
          <img src={icon5.src} alt={icon5.src} />
          <p>Business</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_six">
          <img src={icon6.src} alt={icon6.src} />
          <p>Travel</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_seven">
          <img src={icon7.src} alt={icon7.src} />
          <p>HealthCare</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_eight">
          <img src={icon8.src} alt={icon8.src} />
          <p>Lifestyle</p>
        </div>

        {/* repeat */}

        <div className="ourspecial_cards_split ourspecial_split_one">
          <img src={icon1.src} alt={icon1.src} />
          <p>Finance</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_two">
          <img src={icon2.src} alt={icon2.src} />
          <p>Education</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_three">
          <img src={icon3.src} alt={icon3.src} />
          <p>Social Network</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_four">
          <img src={icon4.src} alt={icon4.src} />
          <p>E-Commerce</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_five">
          <img src={icon5.src} alt={icon5.src} />
          <p>Business</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_six">
          <img src={icon6.src} alt={icon6.src} />
          <p>Travel</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_seven">
          <img src={icon7.src} alt={icon7.src} />
          <p>HealthCare</p>
        </div>
        <div className="ourspecial_cards_split ourspecial_split_eight">
          <img src={icon8.src} alt={icon8.src} />
          <p>Lifestyle</p>
        </div>
      </div>
    </div>
  );
};

export default OurSpecial;
