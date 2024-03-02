import React, { useState } from "react";
import sideArrow from "@/styles/assets/145.svg";
import { useModal } from "@/components/common/ModelContext";
import card0 from '@/styles/assets/162.svg'
import card1 from '@/styles/assets/163.svg'
import card2 from '@/styles/assets/164.svg'
import card3 from '@/styles/assets/165.svg'
import card4 from '@/styles/assets/166.svg'
import card5 from '@/styles/assets/167.svg'
import card6 from '@/styles/assets/168.svg'
import card7 from '@/styles/assets/169.svg'

const ConsultingServices = () => {
  const [hover, setHover] = useState(false);
  const [secondIndex , setIndex] = useState(null)
  const {openModal} = useModal();

  const hoverStyle = {
    opacity: hover ? 1 : 0,
    height: hover ? "auto" : 0,
    transition: "opacity 0.3s ease, height 0.3s ease",
    position: hover ? "relative" : "",
    bottom: hover ? "20px" : "",
    cursor: "none"
  };

  const hoverStyleTitle = {
    position: hover ? "relative" : "",
    bottom: hover ? "30px" : "",
    transition: "all 0.3s ease, height 0.3s ease",
    cursor: "none"
  };

  const serviceCards = [
    {
      title : 'React Developer',
      discription :"At Alo Infotech, We are providing the best resources for your company's IT needs . Need a React developer? Look no further. We listen to your requirements and handpick the perfect developer for you. With expertise tailored to your specifications, our developers ensure seamless integration and top-notch performance for your projects. Trust Alo Infotech for skilled React developers tailored to your needs.",
      src : card0.src,
    },
    {
      title : 'Angular Developer',
      discription :'Need an Angular developer who truly gets your project? Alo Infotech is your answer. Our commitment to understanding your needs ensures we handpick developers who excel in delivering tailored solutions. Expect nothing less than flawless integration and optimal performance from our team of Angular experts, meticulously chosen to meet your specifications.',
      src : card1.src,
    },
    {
      title : 'Flutter Developer',
      discription :'Looking for a skilled Flutter developer to elevate your project? Alo Infotech has you covered. Our team specializes in sourcing top-notch talent specifically suited to your requirements. Whether you need custom app development or assistance with existing projects, our Flutter developers bring expertise and innovation to the table. Partner with Alo Infotech for tailored IT solutions that exceed your expectations.',
      src : card2.src,
    },
    {
      title : 'UI/UX Designer',
      discription :'Seeking exceptional UI/UX designers to enhance your projects? Your search ends here! Our team excels at selecting designers who demonstrate mastery in every aspect of design, guaranteeing that we meet your individual needs with accuracy and proficiency. Trust us to provide you with tailored resources that align perfectly with your project objectives.',
      src : card3.src,
    },
    {
      title : 'Node JS Developer',
      discription :"In need of a talented Node.Js developer to optimize your project? Our IT consulting team specializes in identifying and securing the ideal candidates for your specific needs. Whether you're embarking on custom app development or seeking assistance with existing projects, our skilled Node.Js developers are equipped to deliver exceptional results. Choose Alo Infotech for personalized IT solutions tailored to exceed your expectations.",
      src : card4.src
    },
    {
      title : 'Data Analyst',
      discription :"In search of a proficient Data Analyst for your ventures? Alo Infotech offers specialized IT consulting services tailored to your needs. Whether it's bespoke app development or support for ongoing projects, our team is equipped to deliver top-tier Data Analysts who meet your criteria. Collaborate with us for personalized IT solutions that go above and beyond your expectations.",
      src : card5.src,
    },
    {
      title : 'Software Tester',
      discription :'Elevate your software testing with our elite team of professionals. At Alo Infotech, we specialize in delivering top-tier software testers tailored to your unique project needs. Trust us for unparalleled IT consulting services, whether you require custom app development or support for ongoing projects. Experience the difference with Alo Infotech – where excellence meets innovation',
      src : card6.src,
    },
    {
      title : 'Java Developer',
      discription :'Are you in search of a highly skilled Java developer to take your project to new heights? Alo Infotech specializes in identifying top-tier talent tailored to your specific requirements. Let our team source the best Java developers who bring unmatched expertise and ingenuity to your project. Partner with us for bespoke IT solutions that go above and beyond your expectations.',
      src : card7.src,
    },
  ]

  return (
    <div className="consultingServices">
      <div className="consultingServices_container">
        <div className="consultingServices_title">
          <h2>IT Consulting services that we offer</h2>
          <p>
          Hire our skilled programmers at Alo Infotech to outsource your projects. With growing business needs, screening applicants becomes challenging. We provide committed experts to manage your business, ensuring high-quality results within deadlines. Achieve strategic goals with our technical expertise, domain experience, and project management skills.
          </p>
        </div>
        <div className="consultingServices_cards">

        {serviceCards.map((items,index)=>(

        
          <div
            onMouseEnter={() => {setHover(true); setIndex(index)}}
            onMouseLeave={() => {setHover(false); setIndex(null)}}
            
            className="consultingServices_splits"
            key={index}
            // )`,
            style={{backgroundImage:`url(${items.src}`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
          >
            <div className="consultingServices_splits_contents">
              <p style={secondIndex === index ?hoverStyleTitle:{}}>{items.title}</p>
              <p style={secondIndex === index ?hoverStyle: {}} className="consultingServices_description">
                {items.discription}
              </p>
            </div>
            <div onClick={openModal} className="consultingServices_getQuote">
              <p>Get Quote</p> <img src={sideArrow.src} alt={sideArrow.src} />{" "}
            </div>
          </div>

        ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultingServices;
