import React from "react";
import Button from "@/components/common/button";
import bannerimage from "@/styles/assets/98.svg";
import { useModal } from "@/components/common/ModelContext";


const Banner = () => {
  const {openModal} = useModal();
  return (
    <div className="webdev_banner">
      <div className="webdev_banner_container">
        <div className="webdev_banner_leftblock">
          <h1>Website Development</h1>
          <div className="webdev_banner_title">
            <h2>Thinking of Enhancing Your Online Presence? Try Our <span>Web Solutions</span></h2>
          </div>
          <p>
            We transform concepts into captivating web realities. Harness the
            power of user-friendly websites to propel your digital evolution.
            Your success story begins with us.
          </p>
          <div onClick={openModal} style={{width:'fit-content'}}>
          <Button label={"Get Quote"} />
          </div>
        </div>
        <div className="webdev_banner_rightblock">
          <div className="webdev_banner_image">
            <img src={bannerimage.src} alt={bannerimage.src} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
