import React, { useState } from 'react';
import Image from '@/components/common/image';
import We from "@/styles/assets/01.svg";
import Ball from "@/styles/assets/02.svg";
import Line from "@/styles/assets/03.svg";
import Shadow from "@/styles/assets/04.svg";
import whatwedoarrow from '@/styles/assets/homewhatwedoarrow.svg'
import MobileAppHover from "@/styles/assets/28.svg";
import WebsiteDevelopmentHover from "@/styles/assets/29.svg";
import BlockchainDevelopmentHover from "@/styles/assets/30.svg";
import ITConsultingHover from "@/styles/assets/33.svg";
import AllProductsHover from "@/styles/assets/32.svg";
import AiServicesHover from "@/styles/assets/31.svg";
import Link from 'next/link';


const WhatWe = () => {

    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (image) => {
        setHoveredImage(image);
    }

    const handleMouseLeave = () => {
        // setHoveredImage(null);
    }

    return (
        <div className="what-we-alo">
            <Image src={Ball.src} alt={Ball.src} className="one" />
            <div className="area-split">
                <div className="split-img">
                    {hoveredImage ? (
                        <Image src={hoveredImage?.src} alt="Hovered Image" className="hover-image" />
                    ) : (
                        <Image src={AiServicesHover?.src} alt="Default Image" className="hover-image" />
                    )}
                </div>
                <div className="card-split">
                    <h3>What we do?</h3>
                    <Image src={Line.src} alt={Line.src} className="two" />
                    <h2>Innovative Solutions for Digital Excellence  <Image src={Shadow.src} alt={Shadow.src} className="three" /></h2>
                    <div className="split-ride">
                        <Link href='/AI-services'>
                        <div className="solo-ride">
                            <div
                                className={hoveredImage === AiServicesHover ? "card-border active" : "card-border"}
                                onMouseEnter={() => handleMouseEnter(AiServicesHover)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='what_we_do_title'>
                                    <h2>AI Services</h2>
                                    <img src={whatwedoarrow.src} alt={whatwedoarrow.src} />
                                </div>
                                <p>Delivering state-of-the-art AI services, advancing businesses with unparalleled cognitive solutions</p>
                            </div>
                        </div>
                        </Link>
                        <Link href='/mobile-app-development'>
                        <div className="solo-ride">
                            <div
                                className={hoveredImage === MobileAppHover ? "card-border active" : "card-border"}
                                onMouseEnter={() => handleMouseEnter(MobileAppHover)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='what_we_do_title'>
                                    <h2>Mobile App Development</h2> 
                                    <img src={whatwedoarrow.src} alt={whatwedoarrow.src} />
                                </div>
                                <p>Delivering top-tier Mobile app development services for unparalleled digital experiences</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="split-ride">
                        <Link href='/website-development'>
                        <div className="solo-ride">
                            <div    
                                className={hoveredImage === WebsiteDevelopmentHover ? "card-border active" : "card-border"}
                                onMouseEnter={() => handleMouseEnter(WebsiteDevelopmentHover)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='what_we_do_title'>
                                    <h2>Website Development</h2>
                                    <img src={whatwedoarrow.src} alt={whatwedoarrow.src} />
                                </div>
                                <p>Offering superlative website development services, epitomizing digital sophistication and precision</p>
                            </div>
                        </div>
                        </Link>
                        <Link href='/blockchain-development'>
                        <div className="solo-ride">
                            <div
                                className={hoveredImage === BlockchainDevelopmentHover ? "card-border active" : "card-border"}
                                onMouseEnter={() => handleMouseEnter(BlockchainDevelopmentHover)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='what_we_do_title'>
                                    <h2>Blockchain Development</h2>
                                    <img src={whatwedoarrow.src} alt={whatwedoarrow.src} />
                                </div>
                                <p>Premier Blockchain development solutions for unparalleled technological advancement</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="split-ride">
                        <Link href='/Products-and-trials'>
                        <div className="solo-ride">
                            <div
                                className={hoveredImage === AllProductsHover ? "card-border active" : "card-border"}
                                onMouseEnter={() => handleMouseEnter(AllProductsHover)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='what_we_do_title'>
                                    <h2>All Products & Trials</h2>
                                    <img className='what_we_arrow' src={whatwedoarrow.src} alt={whatwedoarrow.src} />
                                </div>
                                <p>Discover crafted products for digital needs. Experience exclusive trials, and witness transformative solutions firsthand.</p>
                            </div>
                        </div>
                        </Link>
                        <Link href='/IT-Consulting'>
                        <div className="solo-ride">
                            <div
                                className={hoveredImage === ITConsultingHover ? "card-border active" : "card-border"}
                                onMouseEnter={() => handleMouseEnter(ITConsultingHover)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='what_we_do_title'>
                                    <h2>IT Consulting</h2>
                                    <img src={whatwedoarrow.src} alt={whatwedoarrow.src} />
                                </div>
                                <p>Our elite IT consulting services are your compass, guiding your business towards strategic optimization.</p>
                            </div>
                        </div>  
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWe;
