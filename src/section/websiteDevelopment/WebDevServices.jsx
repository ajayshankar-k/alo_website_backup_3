import React from "react";
import webone from "@/styles/assets/100.svg";
import webtwo from "@/styles/assets/101.svg";
import webthree from "@/styles/assets/102.svg";
import webfour from "@/styles/assets/103.svg";
import bgicon1 from "@/styles/assets/104.svg";
import bgicon2 from "@/styles/assets/105.svg";
import bgicon3 from "@/styles/assets/106.svg";

const WebDevServices = () => {
  return (
    <div className="webdev_services">
      <div className="webdev_services_container">
        <div className="webdev_services_title ">
          <h2>Our Web Development services</h2>
        </div>

        <div>
          <img className="bgicon1" src={bgicon1.src} alt={bgicon1.src} />
        </div>

        <div className="webdev_services">
          <div className="webdev_image">
            <img src={webone.src} alt={webone.src} />
          </div>
          <div className="webdev_content">
            <h2 className="webdev_title_one">Bespoke website development</h2>
            <p>
              Alo Infotech stands out as a premier web development company,
              renowned for crafting dynamic websites that seamlessly adapt to
              the evolving needs of the moment. Our expert team specializes in
              developing websites that effortlessly scale according to the
              screen size of your visitors, ensuring a consistently optimal user
              experience. As a leading player in the web development industry,
              Alo Infotech is committed to excellence, ensuring that your online
              presence reflects the innovative standards of the digital
              landscape. Our comprehensive approach encompasses both the
              artistry of a visually appealing website and the technical prowess
              of a seamlessly functioning backend, making us the go-to choice
              for businesses seeking a top-tier web development partner.
            </p>
          </div>
        </div>

        <div className="webdev_services">
          <div className="webdev_content">
            <h2 className="webdev_title_two">
              Engaging & Responsive Web Designs
            </h2>
            <p>
              At Alo Infotech, we excel in the art of crafting dynamic websites
              from the ground up. For new or revitalized websites, expect
              compelling digital experiences from us.We enhance conversion
              rates, visibility, and trust through thoughtfully designed
              websites.Our focus on high-quality aesthetics, seamless
              scalability, and engaging user interfaces sets us apart, providing
              you with a website that not only captivates but also converts.
              Trust Alo Infotech to redefine your digital footprint and make a
              lasting impression on your audience.
            </p>
          </div>
          <div className="webdev_image">
            <img src={webtwo.src} alt={webtwo.src} />
          </div>
        </div>
        <div>
          <img className="bgicon2" src={bgicon2.src} alt={bgicon2.src} />
        </div>

        <div className="webdev_services">
          <div className="webdev_image">
            <img src={webthree.src} alt={webthree.src} />
          </div>
          <div className="webdev_content">
            <h2 className="webdev_title_three">
              Elevating E-Commerce Platforms
            </h2>
            <p>
              Enhance shopping with convenient online access from anywhere,
              anytime. Alo Infotech specializes in crafting fully scalable
              e-commerce websites that cater to both desktop and mobile users.
              Our team combines stylish website design with coding and
              customization in platforms like Woocommerce, ensuring a quick
              setup for your online store in just a few days. What sets us apart
              is our ability to deliver a cutting-edge e-commerce website at an
              exceptionally reasonable cost. Whether you&apos;re a multinational
              corporation or a solo entrepreneur, our e-commerce web development
              services can be tailored to fit both your requirements and budget
              seamlessly.  
            </p>
          </div>
        </div>
        <div>
          <img className="bgicon3" src={bgicon3.src} alt={bgicon3.src} />
        </div>
        <div className="webdev_services">
          <div className="webdev_content">
            <h2 className="webdev_title_four">Development for CRM Websites</h2>
            <p>
              We specialize in strategic development for CRM websites, offering
              a comprehensive approach to enhance your business operations. Our
              dedicated team crafts customized CRM solutions to streamline your
              processes, boost customer engagement, and maximize operational
              efficiency. With a focus on user-friendly interfaces and robust
              functionalities, our CRM websites are designed to empower your
              business with seamless customer relationship management, fostering
              stronger connections and driving sustained growth. Whether you are
              looking to implement a new CRM system or optimize your existing
              one, Alo Infotech is your trusted partner for strategic CRM
              website development, tailored to meet the unique needs of your
              business.
            </p>
          </div>
          <div className="webdev_image">
            <img src={webfour.src} alt={webfour.src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevServices;
