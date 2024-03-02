import React from 'react'
import { Fragment } from "react";
import Head from "next/head";
import Banner from '@/section/mobileAppDevelopment/Banner';
import Crafting from '@/section/mobileAppDevelopment/Crafting';
import OurProcess from '@/section/mobileAppDevelopment/OurProcess';
import Comprehensive from '@/section/mobileAppDevelopment/Comprehensive';
import AndroidAndIos from '@/section/mobileAppDevelopment/AndroidAndIos';
import OurSpecial from '@/section/mobileAppDevelopment/OurSpecial';

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Alo Info-Tech - Mobile App Development
        </title>
        <meta name="theme-color" content="#4CAAED" />
        <meta
          name="keywords"
          content="Best it services and solutions in Nagercoil, IT company in Nagercoil, Top 10 software companies, custom software solutions, web development company in Nagercoil, mobile app development company in Nagercoil, software testing, AI development Company in Nagercoil, digital marketing company in Nagercoil, software companies near me, IT companies near me, blockchain development, IT staffing, IT solutions provider, software maintenance and support, software consulting near me, ittraining, nagercoil it companies, nagercoil software companies, Aloinfotech, Tech companies, tech companies in nagercoil, digital marketing solutions, top it companies in Nagercoil, Application Development, Software Service, WebDevelopment, Mobile App Development, Software testing,  UI/UX Designing Services, IT Company, Software Company, Digital Marketing Services"
        />
        <meta name='keywords' content='app development company, app development company near me, mobile app development company, mobile application development, app building company'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering"
        />
        <link rel="icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          property="instagram:title"
          content="Alo Infotech - Harmonizing Technology, Empowering Individual"
        />
        <meta
          property="instagram:description"
          content="Alo Info-Tech, a stellar software innovator in Nagercoil, excels in bespoke tech solutions. With a rich 3+ years legacy and 64+ successful projects, we redefine excellence in mobile app and website development, IT consulting, and avant-garde AI services. Elevate your tech endeavors with our comprehensive suite of products and trial offering"
        />
        <meta
          property="instagram:image"
          content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D"
        />
        <meta
          property="instagram:url"
          content="https://www.instagram.com/alo_info_tech/?igsh=ZGNjOWZkYTE3MQ%3D%3D"
        />
        <meta
          property="facebook:url"
          content="https://www.facebook.com/profile.php?id=100092521095313"
        />
      </Head>
      <Banner />
      <Crafting />
      <OurProcess />
      <Comprehensive />
      <AndroidAndIos />
      <OurSpecial />
    </Fragment>
  )
}

export default index