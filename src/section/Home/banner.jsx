import React from 'react';
import Button from '@/components/common/button';
import Image from '@/components/common/image';
import Banner from "@/styles/assets/banner.svg";
import Link from '@/components/common/link';

const BannerSection = () => {
    return (
        <div className="banner-alo">
            <div className="banner-area">
                <div className="banner-img">
                    <Image src={Banner.src} alt={Banner.src} />
                </div>
                <div className="banner-content">
                    <h2>Harmonizing Technology,</h2>
                    <h1>Empowering  Individual </h1>
                    <p>Engage with us to elevate your enterprise through our spectrum of services, and explore the transformative potential of our cutting-edge products and trial offerings. </p>
                    <Link href="/contact-us?page=scroll" text={<Button label="Get Started" />} />
                </div>
            </div>
        </div>
    )
}
export default BannerSection