import React, { Fragment } from 'react'
import Image from '@/components/common/image';
import One from "@/styles/assets/22.svg";
import Two from "@/styles/assets/23.svg";
import Three from "@/styles/assets/24.svg";
import Four from "@/styles/assets/25.svg";
import Five from "@/styles/assets/26.svg";
import Six from "@/styles/assets/27.svg";

const OurValues = () => {
    return (
        <Fragment>
            <div className="our-values">
                <h2>Our values</h2>
                <h3>Where Values Shape Tomorrows Technology!</h3>
                <div className="values-parent">
                    <div className="one">
                        <div className="split-values">
                            <Image src={One.src} alt={One.src} />
                            <h3>Customer Experience Matters </h3>
                            <p>We believe that every interaction with our customers is an opportunity to transcend expectations, deliver exceptional solutions, and forge enduring partnerships. </p>
                        </div>
                        <div className="split-values">
                            <Image src={Two.src} alt={Two.src} />
                            <h3>Work-Life Balance </h3>
                            <p>Encourage a healthy balance between work and personal life, recognizing that employee well-being is essential for sustained creativity and productivity. </p>
                        </div>
                        <div className="split-values">
                            <Image src={Three.src} alt={Three.src} />
                            <h3>Value Time as Currency</h3>
                            <p>Acknowledge the importance of time as a precious resource, optimizing efficiency and effectiveness in all endeavours. </p>
                        </div>
                    </div>
                    <div className="one">
                        <div className="split-values">
                            <Image src={Four.src} alt={Four.src} />
                            <h3>Celebrate Success</h3>
                            <p>Acknowledge and celebrate individual and team achievements, creating a positive and motivating atmosphere. </p>
                        </div>
                        <div className="split-values">
                            <Image src={Five.src} alt={Five.src} />
                            <h3>Unity in Every Endeavor</h3>
                            <p>In every project and initiative, we strive for unity, recognizing that our collective strength propels us towards success. </p>
                        </div>
                        <div className="split-values">
                            <Image src={Six.src} alt={Six.src} />
                            <h3>Social Responsibility</h3>
                            <p>Beyond our daily operations, we dedicate ourselves to creating meaningful change in society
                                through philanthropy, environmental initiatives, educational programs, and community
                                engagement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default OurValues