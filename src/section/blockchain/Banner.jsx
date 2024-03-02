import React from "react";
import Button from "@/components/common/button";
import { useModal } from "@/components/common/ModelContext";

const Banner = () => {
  const {openModal} = useModal();

  return (
    <div className="blockchain_banner">
      <div className="blockchain_banner_container">
        <h2>Block chain Development</h2>
        <h1>
          Experience a New Level of Security Excellence with Our Tailored{" "}
          <span>Blockchain Development Services</span>
        </h1>
        <p>
          Starting a new business or scaling up an enterprise? Look no further –
          our secure and reliable custom blockchain development services are
          here to meet your requirements. We specialize in delivering innovative
          solutions that not only streamline processes but also future-proof
          your business in the rapidly evolving digital landscape.
        </p>
        <Button onClick={openModal} label="Get Quote" />
      </div>
    </div>
  );
};

export default Banner;
