import Button from "@/components/common/button";
import React from "react";
import aibanner from "@/styles/assets/129.svg";
import { useModal } from "@/components/common/ModelContext";

const Banner = () => {
  const { openModal } = useModal();
  return (
    <div className="ai_banner">
      <div className="ai_banner_container">
        <div className="ai_banner_leftblock">
          <h1>AI Services</h1>
          <h2>
            Unlocking Human-Centric Digital Transformation through{" "}
            <span>AI Innovation</span>
          </h2>
          <p>
            Transform your business operations with advanced intelligent
            systems. Explore the diverse applications of AI in your enterprise.
            With contextual AI implementations, we enhance workflows, optimize
            decision-making, and extract valuable insights from your data.
          </p>
          <Button onClick={openModal} label={"Get Quote"} />
        </div>
        <div className="ai_banner_rightblock">
          <img src={aibanner.src} alt={aibanner.src} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
