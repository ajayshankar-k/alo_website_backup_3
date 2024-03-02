import React from "react";
import arrow from "@/styles/assets/73.svg";
import ourprocess1 from "@/styles/assets/74.svg";
import ourprocess2 from "@/styles/assets/75.svg";
import ourprocess3 from "@/styles/assets/76.svg";
import ourprocess4 from "@/styles/assets/77.svg";
import ourprocess5 from "@/styles/assets/78.svg";
import ourprocess6 from "@/styles/assets/79.svg";

const OurProcess = () => {
  return (
    <div className="ourprocess">
      <div className="ourprocess_container">
        <h2>Our Process</h2>
        <div className="ourprocess_split_container">
          <h3 className="ourprocess_numbers">01</h3>
          <div className="ourprocess_split">
            <div className="oursplit_leftblock">
              <h3 className="ourprocess_title">Strategy & Planning </h3>
              <p>
                Alo Infotech&apos;s seasoned team transforms diverse ideas into
                mobile apps. With extensive experience, we prioritize each
                project, beginning with thorough research and strategic planning
                discussions. 
              </p>
            </div>
            <div className="ourprocess_split_arrow">
              <img src={arrow.src} alt={arrow.src} />
            </div>
            <div className="ourprocess_split_image">
              <img src={ourprocess1.src} alt={ourprocess1.src} />
            </div>
          </div>

          <h3 className="ourprocess_numbers">02</h3>
          <div className="ourprocess_split">
            <div className="ourprocess_split_image">
              <img src={ourprocess2.src} alt={ourprocess2.src} />
            </div>
            <div className="ourprocess_split_arrow">
              <img src={arrow.src} alt={arrow.src} />
            </div>
            <div className="oursplit_rightblock">
              <h3 className="ourprocess_title">Design & Development </h3>
              <p>
                We turn your ideas into impactful mobile apps, driving business
                growth. Our team crafts flawless, user-centric designs to
                maximize app downloads and enhance customer engagement. 
              </p>
            </div>
          </div>

          <h3 className="ourprocess_numbers">03</h3>
          <div className="ourprocess_split">
            <div className="oursplit_leftblock">
              <h3 className="ourprocess_title">Testing</h3>
              <p>
                Zero bugs is our standard. Before client delivery, our analysts
                extensively test the mobile app, ensuring a 100% bug-free
                application. 
              </p>
            </div>
            <div className="ourprocess_split_arrow">
              <img src={arrow.src} alt={arrow.src} />
            </div>
            <div className="ourprocess_split_image">
              <img src={ourprocess3.src} alt={ourprocess3.src} />
            </div>
          </div>

          <h3 className="ourprocess_numbers">04</h3>
          <div className="ourprocess_split">
            <div className="ourprocess_split_image">
              <img src={ourprocess4.src} alt={ourprocess4.src} />
            </div>
            <div className="ourprocess_split_arrow">
              <img src={arrow.src} alt={arrow.src} />
            </div>
            <div className="oursplit_rightblock">
              <h3 className="ourprocess_title">Launch</h3>
              <p>
                After thorough testing, we launch the app, meeting all your
                needs. Our bug-free mobile app is accompanied by an installation
                guide for your convenience. 
              </p>
            </div>
          </div>

          <h3 className="ourprocess_numbers">05</h3>
          <div className="ourprocess_split">
            <div className="oursplit_leftblock">
              <h3 className="ourprocess_title">User Adoption </h3>
              <p>
                After a successful app launch, Alo Infotech concentrates on user
                adoption, using strategic marketing, training, and support to
                integrate the app seamlessly and ensure ongoing success.
              </p>
            </div>
            <div className="ourprocess_split_arrow">
              <img src={arrow.src} alt={arrow.src} />
            </div>
            <div className="ourprocess_split_image">
              <img src={ourprocess5.src} alt={ourprocess5.src} />
            </div>
          </div>

          <h3 className="ourprocess_numbers">06</h3>
          <div className="ourprocess_split">
            <div className="ourprocess_split_image">
              <img src={ourprocess6.src} alt={ourprocess6.src} />
            </div>
            <div className="ourprocess_split_arrow">
              <img src={arrow.src} alt={arrow.src} />
            </div>
            <div className="oursplit_rightblock">
              <h3 className="ourprocess_title">Support & Maintenance</h3>
              <p>
                Alo Infotech&apos;s team is accessible 24/7 for post-launch support
                and maintenance, ensuring the app&apos;s seamless operation through
                regular upkeep. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
