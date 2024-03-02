import React from "react";
import mobileappimg1 from "@/styles/assets/72.svg";

const Crafting = () => {
  return (
    <div className="crafting_section">
      <div className="crafting_container">
        <div className="crafting_image">
          <img src={mobileappimg1.src} alt={mobileappimg1.src} />
        </div>
        <div className="crafting_contents">
          <h3>Your Vision, Our Creation </h3>
          <h2>Crafting from Concept to the App Store Showcase </h2>
          <p>
            Our expert team ensures your mobile app is crafted promptly and
            within your budget. Our skilled mobile app developers in Nagercoil
            guarantee that the apps we create not only meet but exceed your
            expectations, tailoring to your specific requirements.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crafting;
