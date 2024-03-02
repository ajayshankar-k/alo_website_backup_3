import React from "react";
import webprocessicon1 from "@/styles/assets/107.svg";
import webprocessicon2 from "@/styles/assets/108.svg";
import webprocessicon3 from "@/styles/assets/109.svg";
import webprocessicon4 from "@/styles/assets/110.svg";
import webprocessicon5 from "@/styles/assets/111.svg";
import webprocessicon6 from "@/styles/assets/112.svg";

const WebDevProcess = () => {
  return (
    <div className="webdev_process_wrapper">
      <h2 className="webdev_process_title">Our Process</h2>
      <div className="webdev_process">
        <div className="webdev_process_container">
          <div className="webdev_process_cards_wrapper">
            <h2>1</h2>
            <div className="webdev_process_cards">
              <img src={webprocessicon1.src} alt={webprocessicon1.src} />
              <h3>Strategy</h3>
              <p>
                With a clear understanding of your requirements, we
                strategically plan the development process. We outline scope,
                timelines, resources.
              </p>
            </div>
          </div>

          <div className="webdev_process_cards_wrapper">
            <h2>2</h2>
            <div className="webdev_process_cards">
              <img src={webprocessicon2.src} alt={webprocessicon2.src} />
              <h3>Design</h3>
              <p>
                In this phase, we meticulously craft the website&apos;s visual
                appeal, design the user interface, and refine elements.
              </p>
            </div>
          </div>

          <div className="webdev_process_cards_wrapper">
            <h2>3</h2>
            <div className="webdev_process_cards">
              <img src={webprocessicon3.src} alt={webprocessicon3.src} />
              <h3>Development</h3>
              <p>
                This stage brings the website to life through coding. Front-end
                optimizes user experience, back-end manages server functions.
              </p>
            </div>
          </div>

          <div className="webdev_process_cards_wrapper">
            <h2>4</h2>
            <div className="webdev_process_cards">
              <img src={webprocessicon4.src} alt={webprocessicon4.src} />
              <h3>Testing</h3>
              <p>
                {" "}
                Once the development is complete, the website undergoes thorough
                testing. This includes checking for bugs, usability, and
                cross-device compatibility.
              </p>
            </div>
          </div>
          <div className="webdev_process_cards_wrapper">
            <h2>5</h2>
            <div className="webdev_process_cards">
              <img src={webprocessicon5.src} alt={webprocessicon5.src} />
              <h3>Deployment</h3>
              <p>
                Once the website passes testing and is approved, it is deployed
                to a live server and made accessible to the public. 
              </p>
            </div>
          </div>
          <div className="webdev_process_cards_wrapper">
            <h2>6</h2>
            <div className="webdev_process_cards">
              <img src={webprocessicon6.src} alt={webprocessicon6.src} />
              <h3>Maintenance</h3>
              <p>
                {" "}
                After the website is live, ongoing maintenance is necessary to
                address any issues that may arise, implement updates, and make
                improvements. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevProcess;
