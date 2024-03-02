import React from "react";
import Button from "@/components/common/button";
import { useModal } from "@/components/common/ModelContext";

const Banner = () => {
  const {openModal} = useModal();

  return (
    <div className="mobile_app_banner">
      <div className="mobile_app_container">
        <h2>Mobile App Development</h2>
        <div className="mobile_app_banner_title">
          <h1>Transforming Ideas into</h1>
          <h1 className="mobile_app">
            Innovative <div>Mobile Apps</div>
          </h1>
        </div>
        <p>
          Welcome to Alo Infotech, your go-to destination for unparalleled
          mobile app development services in Nagercoil. As a dynamic software
          company, we specialize in transforming your ideas and plans into
          innovative applications that resonate with the latest industry trends.
          Whether you&apos;re envisioning a groundbreaking startup app or enhancing
          an existing concept, our dedicated team is committed to turning your
          aspirations into a reality.
        </p>
        <Button onClick={openModal} label="Get Quote" />
      </div>

    </div>
  );
};

export default Banner;
