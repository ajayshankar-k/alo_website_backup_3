import React from "react";
import yourgrowthimage from "@/styles/assets/99.svg";

const YourGrowth = () => {
  return (
    <div className="your_growth">
      <div className="your_growth_container">
        <div className="your_growth_image">
          <img src={yourgrowthimage.src} alt={yourgrowthimage.src} />
        </div>
        <div className="your_growth_rightblock">
          <h2>
            Your growth, our expertise. Discover limitless possibilities with
            Alo Infotech
          </h2>
          <p>
            As a premium software company based in Nagercoil, Alo Infotech
            stands as a leading provider of comprehensive web development
            services. From captivating UX and UI design to robust e-commerce
            solutions, full-stack development, and meticulous website
            maintenance, we ensure that every aspect of your online presence is
            optimized for success. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourGrowth;
