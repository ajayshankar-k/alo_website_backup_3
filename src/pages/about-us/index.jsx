import React, { Fragment } from 'react'
import Head from 'next/head'
import Banner from '@/section/about/banner';
import OurStory from '@/section/about/our-story';
import CombineImg from '@/section/about/combine-img';
import OurValues from '@/section/about/our-values';
import TimeLine from '@/section/about/timeline';
import FounderPage from '@/section/about/founder';
import Slogan from '@/section/about/slogan';
import Image from '@/components/common/image';
import One from '@/styles/assets/54.svg';
import Two from '@/styles/assets/55.svg';
import Three from '@/styles/assets/56.svg';

const About = () => {
    return (
        <Fragment>
            <Head>
                <title>Alo Info-Tech - About us </title>
                <meta name="theme-color" content="#4CAAED" />
                <meta name = "keywords" content = "Best it services and solutions in Nagercoil, IT company in Nagercoil, Top 10 software companies, custom software solutions, web development company in Nagercoil, mobile app development company in Nagercoil, software testing, AI development Company in Nagercoil, digital marketing company in Nagercoil, software companies near me, IT companies near me, blockchain development, IT staffing, IT solutions provider, software maintenance and support, software consulting near me, ittraining, nagercoil it companies, nagercoil software companies, Aloinfotech, Tech companies, tech companies in nagercoil, digital marketing solutions, top it companies in Nagercoil, Application Development, Software Service, WebDevelopment, Mobile App Development, Software testing,  UI/UX Designing Services, IT Company, Software Company, Digital Marketing Services,"/>
                <meta name='keywords' content = "IT solutions for your business, IT services and consultiing, Infotech technology, Infotech solutions, Business solutions, Tech and digital service, technology for impact" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering" />
                <link rel="icon" href="/icon.svg" />
                <link rel="manifest" href="/manifest.json" />
                <meta property="instagram:title" content="Alo Infotech - Harmonizing Technology, Empowering Individual" />
                <meta property="instagram:description" content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering" />
                <meta property="instagram:image" content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D" />
                <meta property="instagram:url" content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D" />
                <meta property="facebook:url" content="https://www.facebook.com/profile.php?id=100092521095313" />
            </Head>
            <Banner />
            <OurStory />
            <CombineImg />
            <OurValues />
            <TimeLine />
            <FounderPage />
            <div className="manage">
                <h2>Our Management Team</h2>
                <h3 className="sub-head">Navigating success with our dynamic management squad</h3>
                <div className="manage-part">
                    <div>
                        <Image src={One.src} alt={One.src} />
                        <h4>Nishanth</h4>
                        
                    </div>
                    <div>
                        <Image src={Two.src} alt={Two.src} />
                        <h4>Balaji</h4>
                        
                    </div>
                    <div>
                        <Image src={Three.src} alt={Three.src} />
                        <h4>Sree Veni</h4>
                       
                    </div>
                </div>
            </div>      
            <Slogan />
        </Fragment>
    )
}
export default About