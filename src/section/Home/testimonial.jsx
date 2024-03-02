import React, { Fragment, useState, useEffect } from 'react'
import Bg from "@/styles/assets/39.svg";
import Star from "@/styles/assets/40.svg";
import Image from '@/components/common/image';


const texts = [
    {
        title: 'Sealed',
        content:
            'I am sincerely grateful to express my appreciation for the exceptional work carried out by Alo Info-Tech in developing a truly wonderful app for my business. From the initial consultation to the final product, the team at Alo Info-Tech demonstrated unparalleled professionalism and expertise. The app has context menu.',
    },
    {
        title: 'Fresh Fish',
        content:
            ' I am writing this review to express my utmost appreciation for the reliability and performance of your hosting platform, which have significantly contributed to the success and growth of our online presence.',
    },
    {
        title: 'Ecotec',
        content:
            ' Thanks to Alo for making the Ecotec website user interface clean, modern, and easy to navigate. Browsing through the apps extensive product catalogue is a breeze, thanks to the intuitive search and filtering options.',
    },
    {
        title: 'Studio7',
        content:
            'ALO Group is handling digital marketing activities for my business portfolio. The team is very supportive and proactive. No doubt they have made my business a wonderful reach. Highly recommended.I was wondered about their service. ',
    },
];

const Testimonial = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const transformValue = `translateX(${-100 * currentIndex}%)`;


    return (
        <Fragment>
            <div className="test">
                <div className="testimonial-parent">
                    <div className="testimonial">
                        <div className="threee">
                            <h3>They trusted us</h3>
                            <h2>Client Testimonials</h2>
                            <Image src={Bg.src} alt={Bg.src} />
                        </div>
                        <div className="fourr">
                            <div className="carousel">
                                <div className="slide-container" style={{ transform: transformValue }}>
                                    {texts.map((text, index) => (
                                        <div key={index} className="slide">
                                            <h2>{text.title}</h2>
                                            <p>{text.content}</p>
                                            <ul className="star" >
                                                {[1, 2, 3, 4, 5].map((a) => (
                                                    <li key={a}>
                                                        <Image src={Star.src} alt={Star.src} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Testimonial