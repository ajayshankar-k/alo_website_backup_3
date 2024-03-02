import React, { useEffect, useState, useRef } from 'react';
import imageone from "@/styles/assets/154.svg";
import imagetwo from "@/styles/assets/156.svg"
import imageThree from "@/styles/assets/157.svg"
import DownloadApp from "./DownloadApp";

const Products = () => {
  const [activeSection, setActiveSection] = useState("AloInvoice");

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Determines the visibility percentage needed to trigger the intersection
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Get the id of the intersecting section
            const id = entry.target.getAttribute('id');
            setActiveSection(id);
          }
        });
      },
      observerOptions
    );

    // Observe all section elements
    sectionRefs.current.forEach(sectionRef => {
      observer.observe(sectionRef);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="products_section_wrapper">
      <div className="products_nav">
        <div className="produts_nav_container">
          <h2
            onClick={() => scrollToSection("AloInvoice")}
            className={activeSection === "AloInvoice" ? "active" : ""}
          >
            Alo Invoice
          </h2>
          <h2
            onClick={() => scrollToSection("FastX")}
            className={activeSection === "FastX" ? "active" : ""}
          >
            Fast X
          </h2>
          <h2
            onClick={() => scrollToSection("AloFoodie")}
            className={activeSection === "AloFoodie" ? "active" : ""}
          >
            Alo Foodie
          </h2>
        </div>
      </div>

      <div id="AloInvoice" ref={ref => sectionRefs.current[0] = ref} className="products_section AloInvoice">
        <div className="aloinvoice_wrapper">
          <div className="aloinvoice_leftblock">
            <h3>
            Struggling with restaurant rushes? Simplify orders with Alo Invoice. Scan, customize, and enjoy hassle-free dining.{" "}
            </h3>
            <p>
            Alo Invoice streamlines restaurant operations, minimizing rush and wait times. With QR codes placed on tables, customers can easily access menus and customize orders. Orders seamlessly transfer to staff, and bills are conveniently emailed to customers, enhancing dining experiences.
            </p>
          </div>
          <div className="aloinvoice_rightblock">
            <img src={imageone.src} alt={imageone.src} />
          </div>
        </div>
      </div>

      <DownloadApp styling="downloadAppOne" href='https://play.google.com/store/apps/details?id=com.alo_invoice.restaurant' description="Experience Effortless Dining with Alo Invoice. Are you ready to revolutionize your restaurant experience? Say goodbye to rush and waiting with our innovative app." />

      <div id="FastX" ref={ref => sectionRefs.current[1] = ref} className="products_section FastX">
        <div className="fastx_wrapper">
          <div className="fastx_leftblock">
              <img src={imagetwo.src} alt={imagetwo.src} />
          </div>
          <div className="fastx_rightblock">
            <h3>
            Life moves fast, and so do we! FastX delivers your essentials with speed and efficiency. Try us today!
            </h3>
            <p>
            FastX, by Alo Infotech, is a rapid delivery app offering 24/7 customer support. From groceries to documents, medicines, and food, FastX ensures swift delivery of all your essentials. With a focus on speed and efficiency, FastX makes receiving your items hassle-free.
            </p>
          </div>
        </div>
      </div>

      <DownloadApp styling="downloadAppTwo" href="https://play.google.com/store/apps/details?id=com.fastx.consumer" description="Experience lightning-fast delivery services at your fingertips with FastX. Interested in exploring its diverse range of features for your convenience"/>

      <div id="AloFoodie" ref={ref => sectionRefs.current[2] = ref} className="products_section AloFoodie">
        <div className="alofoodie_wrapper">
          <div className="alofoodie_leftblock">
            <h3>
            Hungry? Alo Foodie has the perfect solution for you. With a wide selection of restaurants, we cater to every craving.
            </h3>
            <p>
            Alo Foodie is a convenient food delivery app that brings tasty meals right to your doorstep. With a user-friendly interface, browse through a diverse selection of cuisines from local restaurants. Simply place your order, sit back, and enjoy delicious food delivered swiftly. Experience hassle-free dining with Alo Foodie today!
            </p>
          </div>
          <div className="alofoodie_rightblock">
            <img src={imageThree.src} alt={imageThree.src} />
          </div>
        </div>
      </div>

      <DownloadApp styling="downloadAppThree" href="https://play.google.com/store/apps/details?id=com.ALO_Foodie_alo_foodie" description="Craving something delicious? Let Alo Foodie app guide you. Find top-rated eateries nearby."/>
    </div>
  );
};

export default Products;
