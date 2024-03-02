import React, { useState, useEffect } from 'react';
import One from "@/styles/assets/51.svg";
import Two from "@/styles/assets/53.svg";
import Three from "@/styles/assets/52.svg";


const texts = [
    {
        title: 'Nishanth',
        position: 'Android Developer',
        content:
            "Hi, I'm Nishanth, an Android developer in the Alo Family. Working here has been an incredible experience. Alo Info-tech is undeniably the best place to work, providing an environment that nurtures creativity, fosters innovation, and encourages collaboration. The positive vibes and supportive team make every day enjoyable, contributing to a thriving and fulfilling professional journey. I'm proud to be part of an Alo Family that truly values its employees and creates an atmosphere conducive to both personal and collective success. Thanks to the fantastic work culture and the cool atmosphere. ",
    },
    {
        title: 'Sangeeth',
        position: 'Flutter Developer',
        content:
            ' I am writing this review to express my utmost appreciation for the reliability and performance of your hosting platform, which have significantly contributed to the success and growth of our online presence.',
    },
    {
        title: 'Mugesh',
        position: 'Flutter Developer',
        content: "Hey all, I'm Mugesh, a proud Flutter developer in the vibrant Alo Family. Working here is more than just a job, it's a journey filled with innovation and growth. The nature of our work is dynamic, pushing boundaries and unlocking creative potential daily. Alo's commitment to employee well-being extends beyond work, with thoughtful and inclusive events that bring the entire team together. The company's genuine care for its personnel is evident in the support provided, fostering a sense of belonging and shared success. Proud to be an Aloian!",
    }
];


const images = [
    {
        src: One.src, // Add your image source
    },
    {
        src: Two.src // Add your image source
    },
    {
        src: Three.src, // Add your image source
    },
];


const Tech = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [stop, setStop] = useState(true);

    useEffect(() => {
        if (stop) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [stop]);

    const transformValue = `translateX(${-100 * currentIndex}%)`;

    const handlePrevClick = () => {
        setStop(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
    };

    const handleNextClick = () => {
        setStop(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="tech-parent">
            <h2>Tech Minds, Feedback Finds </h2>
            <div className="techy">
                <div className="tech-image">
                    <svg className='one' xmlns="http://www.w3.org/2000/svg" width="69" height="63" viewBox="0 0 69 63" fill="none">
                        <g clip-path="url(#clip0_551_208)">
                            <path d="M1.301 35.6167C4.28771 41.7198 10.1716 47.3004 17.1329 48.0874C20.3835 48.5003 23.6843 47.9696 26.6415 46.5584C29.5988 45.1471 32.0877 42.9151 33.8114 40.1284C36.3077 35.926 37.1448 26.4469 30.7986 24.9703C27.7648 24.2561 24.4543 26.2069 22.146 27.9658C20.2163 29.4461 18.4599 31.4159 18.0772 33.9475C17.4506 38.5826 21.7091 41.871 25.3015 43.8306C28.6772 45.6736 32.829 47.2639 36.7245 47.2738C39.5656 47.2797 42.6187 45.5713 44.9664 44.1637C53.9172 38.9161 59.8291 29.5587 59.166 19.0078C59.0284 17.2892 58.7637 15.5831 58.3741 13.9035C58.1442 13.2823 57.6799 12.7761 57.0809 12.4934C56.4819 12.2108 55.7959 12.1743 55.1703 12.3919C54.547 12.6254 54.0386 13.0915 53.7521 13.6923C53.4656 14.2931 53.4233 14.9816 53.6342 15.6129C54.1909 18.0952 54.3379 20.6518 54.0694 23.1815C53.8504 25.3878 53.2384 27.537 52.2625 29.5278C52.036 30.0051 51.798 30.4661 51.5378 30.9305C51.2776 31.3948 51.2482 31.4399 50.9438 31.9109C50.3487 32.8166 49.6969 33.6837 48.9924 34.5071C48.4042 35.1656 47.7906 35.8053 47.1539 36.4123C47.5658 36.0246 46.9904 36.5274 46.9413 36.562L46.4173 37.0163C46.0208 37.3565 45.6047 37.686 45.1909 38.0017C43.8371 39.0261 42.4036 39.9409 40.9042 40.7372C41.5612 40.3849 40.5589 40.9069 40.3944 40.9859C40.23 41.065 39.8078 41.2643 39.4731 41.4142C38.9215 41.6557 38.3527 41.8725 37.7805 42.0673L37.1223 42.2615C36.9263 42.2599 36.7305 42.2788 36.5384 42.3179C35.852 42.3851 36.89 42.4005 36.2885 42.3103C35.6869 42.2201 35.0051 42.1374 34.3551 41.9957C33.9895 41.9106 33.61 41.823 33.2468 41.724L32.6598 41.5502C32.386 41.4738 32.3999 41.4763 32.6598 41.5502L32.2597 41.416C30.4833 40.8288 28.7634 40.083 27.1208 39.1875C26.9239 39.0815 26.7294 38.9615 26.5407 38.8498C25.9016 38.4803 26.9445 39.1281 26.3323 38.7274C25.9852 38.4948 25.6266 38.2459 25.2901 37.9936C24.9535 37.7413 24.6473 37.4799 24.3435 37.2046C24.2341 37.0492 24.0676 36.9341 23.9197 36.7935C23.615 36.4822 24.1787 37.1615 23.7643 36.5727C23.5744 36.3029 23.3903 36.0412 23.1888 35.755C22.9874 35.4687 23.4172 36.3401 23.2291 35.8122C23.1761 35.6567 23.1139 35.5045 23.0428 35.3564C22.945 35.2173 22.9092 34.68 23.0428 35.3564C23.0137 35.1934 22.9986 35.0329 22.9753 34.8781C22.9519 34.7233 23.0507 34.2381 22.9753 34.8781C23.014 34.6552 23.0446 34.438 23.0973 34.2175C22.9498 34.8593 23.2905 33.8492 23.4047 33.6465C23.1046 34.1757 23.462 33.6062 23.5438 33.5487C23.6255 33.4911 23.8288 33.1891 23.9799 33.0216C24.8324 32.1678 25.8001 31.4374 26.8549 30.8516C27.6714 30.3106 28.6036 29.9687 29.5763 29.8535C30.23 29.8093 29.1738 29.7333 29.7599 29.8711C30.346 30.0089 29.3513 29.6206 29.8526 29.9159C29.4412 29.5573 30.3538 30.2112 29.8526 29.9159C30.1391 30.1667 29.6532 29.4937 29.9849 30.104C30.0655 30.2185 30.3012 30.7619 30.0367 30.1776C30.1518 30.3411 30.1876 30.5483 30.256 30.7325C30.3245 30.9166 30.3799 31.1344 30.4378 31.3383C30.2963 30.7897 30.4611 31.493 30.4769 31.5675C30.6718 32.8177 30.6278 34.0936 30.347 35.3273C29.1254 40.4547 23.9136 43.1443 19.1106 43.235C17.1672 43.2403 15.2543 42.752 13.551 41.8161C12.7421 41.4328 11.9872 40.9443 11.306 40.3635C10.5511 39.7585 9.83507 39.1066 9.16202 38.4118C8.7004 37.9296 9.52762 38.827 9.09871 38.3218C8.95483 38.1174 8.76764 37.9556 8.6074 37.7627C8.37144 37.4274 8.08642 37.1266 7.8341 36.8029C7.43699 36.2386 7.03413 35.6661 6.63127 35.0937C6.36077 34.7093 6.10481 34.2414 5.8958 33.8749C5.47536 33.1558 6.11813 34.3298 5.94759 33.9485C5.70902 33.3373 5.24573 32.8405 4.65266 32.5599C4.05959 32.2793 3.38166 32.2361 2.7578 32.4393C2.13588 32.6659 1.62808 33.1281 1.34415 33.7261C1.06023 34.324 1.02297 35.0096 1.24042 35.6348L1.301 35.6167Z" fill="#FF3C6C" />
                        </g>
                        <defs>
                            <clipPath id="clip0_551_208">
                                <rect width="59.61" height="34.05" fill="white" transform="translate(0 34.3066) rotate(-35.1361)" />
                            </clipPath>
                        </defs>
                    </svg>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            className={index === currentIndex ? 'img-active' : 'img-act'}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                    <svg className='two' xmlns="http://www.w3.org/2000/svg" width="42" height="29" viewBox="0 0 42 29" fill="none">
                        <path d="M37.8742 3.44416C38.517 5.71887 38.7055 8.09792 38.4289 10.4455C38.1523 12.793 37.416 15.0631 36.2621 17.1261C35.1082 19.1891 33.5592 21.0046 31.7037 22.469C29.8481 23.9334 27.7223 25.018 25.4476 25.6608C23.1729 26.3036 20.7938 26.4921 18.4463 26.2155C16.0987 25.9389 13.8286 25.2026 11.7656 24.0487C9.70262 22.8947 7.8871 21.3458 6.42272 19.4902C4.95834 17.6347 3.87378 15.5088 3.23096 13.2341" stroke="#BD68FF" stroke-width="5" stroke-linecap="round" />
                    </svg>
                </div>
                <div className="fourr">
                    <div className="carousel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                            <path d="M28.7002 24.5999L32.8002 16.3999H24.6002C15.5392 16.3999 8.2002 27.8389 8.2002 36.8999V65.5999H36.9002V36.8999H20.5002C20.5002 24.5999 28.7002 24.5999 28.7002 24.5999ZM57.4002 36.8999C57.4002 24.5999 65.6002 24.5999 65.6002 24.5999L69.7002 16.3999H61.5002C52.4392 16.3999 45.1002 27.8389 45.1002 36.8999V65.5999H73.8002V36.8999H57.4002Z" fill="url(#paint0_linear_551_195)" />
                            <defs>
                                <linearGradient id="paint0_linear_551_195" x1="41" y1="11" x2="41" y2="66" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#1666B6" />
                                    <stop offset="1" stop-color="#40AFF1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="slide-container" style={{ transform: transformValue }}>
                            {texts.map((text, index) => (
                                <div key={index} className="new-slide">
                                    <h3>{text.title}</h3>
                                    <h2 className='sub-name'>{text.position}</h2>
                                    <p>{text.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="carousel-buttons">
                            <svg onClick={handlePrevClick} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <path d="M42 25C42 34.4 34.4 42 25 42C15.6 42 8 34.4 8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25ZM10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25C40 16.7 33.3 10 25 10C16.7 10 10 16.7 10 25Z" fill="black" />
                                <path d="M26.7001 16.7L18.4001 25L26.7001 33.3L25.3001 34.7L15.6001 25L25.3001 15.2999L26.7001 16.7Z" fill="black" />
                                <path d="M17 26V24H34V26H17Z" fill="black" />
                            </svg>
                            <svg onClick={handleNextClick} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <path d="M8 25C8 15.6 15.6 8 25 8C34.4 8 42 15.6 42 25C42 34.4 34.4 42 25 42C15.6 42 8 34.4 8 25ZM40 25C40 16.7 33.3 10 25 10C16.7 10 10 16.7 10 25C10 33.3 16.7 40 25 40C33.3 40 40 33.3 40 25Z" fill="black" />
                                <path d="M23.2999 33.3L31.5999 25L23.2999 16.7L24.6999 15.3L34.3999 25L24.6999 34.7001L23.2999 33.3Z" fill="black" />
                                <path d="M33 24V26H16V24H33Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tech