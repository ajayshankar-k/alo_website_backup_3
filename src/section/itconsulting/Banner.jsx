import React from "react";
import Button from "@/components/common/button";
import { useModal } from "@/components/common/ModelContext";

const Banner = () => {
  const { openModal } = useModal();
  return (
    <div className="itconsult_banner">
      <div className="itconsult_banner_container">
        <h1>IT Consulting</h1>
        <h2>
          Transforming challenges into opportunities with dynamic IT consulting
          services
        </h2>
        <p>
          At Alo Infotech, our IT consulting services offer invaluable support
          in navigating dynamic tech environments. Efficient IT consulting
          Solutions tailored to your needs. From CV Screening to onboarding, we
          find the right fit for your team. Streamline your hiring process with
          our expertise.
        </p>
        <Button onClick={openModal} label="Get Quote" />
      </div>
    </div>
  );
};

export default Banner;
