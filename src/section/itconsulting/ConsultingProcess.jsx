import React from "react";
import numone from '@/styles/assets/158.svg'
import numtwo from '@/styles/assets/159.svg'
import numthree from '@/styles/assets/160.svg'
import numfour from '@/styles/assets/161.svg'

const ConsultingProcess = () => {
  return (
    <div className="consultprocess">
      <div className="consultprocess_container">
        <h2>Our IT Consulting process</h2>
        <p>
          Our IT Consulting process at Alo Infotech involves a meticulous
          approach tailored to your needs. We begin by thoroughly assessing your
          requirements and challenges. Leveraging our expertise, we craft
          customized solutions to optimize your IT infrastructure. Our team,
          renowned for providing IT consulting services, will resource the best
          developers for your organization
        </p>
      </div>

      <div className="consult_our_process_container">
        <div className="consult_process_cards">
        <div className="consult_our_process_splits"> 
          <div>
            <img src={numone.src} alt={numone.src} />
          </div>
          <div>
            <h3>CV Screening</h3>
            <p>
            During CV screening, our IT consultants assesses qualifications to match ideal candidates with your needs.
            </p>
          </div>
        </div>
        <div className="consult_our_process_splits"> 
          <div>
            <img src={numtwo.src} alt={numtwo.src} />
          </div>
          <div>
            <h3>Recruitment Process</h3>
            <p>
            Our Efficient recruitment process ensures optimal candidate selection, aligning skills with company objectives.
            </p>
          </div>
        </div>
        <div className="consult_our_process_splits"> 
          <div>
            <img src={numthree.src} alt={numthree.src} />
          </div>
          <div>
            <h3>Selection Process</h3>
            <p>
            Our selection process meticulously identifies top talents, ensuring a skilled workforce aligned with company values.
 
            </p>
          </div>
        </div>
        <div className="consult_our_process_splits"> 
          <div>
            <img src={numfour.src} alt={numfour.src} />
          </div>
          <div>
            <h3>Onboarding</h3>
            <p>
            Our Smooth onboarding process integrates new hires seamlessly, fostering a positive and productive work environment.
            </p>
          </div>
        </div>
       
      </div>
      </div>
    </div>
  );
};

export default ConsultingProcess;
