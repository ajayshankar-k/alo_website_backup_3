import React from "react";
import aiimage from '@/styles/assets/131.svg'

const WeCombineHuman = () => {
  return (
    <div className="wecombine">
      <div className="wecombine_container">
        <div className="wecombine_leftblock">
          <img src={aiimage.src} alt={aiimage.src} />
        </div>
        <div className="wecombine_rightblock">
          <h2>
            We combine human wisdom with AI prowess to craft revolutionary
            solutions, unlocking profound insights and unwavering clarity for
            you.
          </h2>
          <p>
            Collaboratively, we craft value-rich workflows and products infused
            with innovation and purpose. With our people-first ethos, we empower
            you to cultivate a culture where AI is embraced, and
            celebrated by your team. It&apos;s not merely about streamlining
            operations or cutting expenses, it&apos;s about crafting impactful and
            uplifting interactions for both your customers and staff.
            Ultimately, we&apos;re not just adapting to the AI era – we&apos;re actively
            shaping its trajectory alongside you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeCombineHuman;
