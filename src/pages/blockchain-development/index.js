import React,{Fragment} from 'react'
import Head from 'next/head'
import Banner from '@/section/blockchain/Banner'
import BlockChainImage from '@/section/blockchain/BlockChainImage'
import BlockChainServices from '@/section/blockchain/BlockChainServices'
import BlockChainPlatform from '@/section/blockchain/BlockChainPlatform'

const index = () => {
  return (
    <Fragment>
        <Head>
        <title>
          Alo Info-Tech - Block-chain Development
        </title>
        <meta name="theme-color" content="#4CAAED" />
        <meta
          name="keywords"
          content="Best it services and solutions in Nagercoil, IT company in Nagercoil, Top 10 software companies, custom software solutions, web development company in Nagercoil, mobile app development company in Nagercoil, software testing, AI development Company in Nagercoil, digital marketing company in Nagercoil, software companies near me, IT companies near me, blockchain development, IT staffing, IT solutions provider, software maintenance and support, software consulting near me, ittraining, nagercoil it companies, nagercoil software companies, Aloinfotech, Tech companies, tech companies in nagercoil, digital marketing solutions, top it companies in Nagercoil, Application Development, Software Service, WebDevelopment, Mobile App Development, Software testing,  UI/UX Designing Services, IT Company, Software Company, Digital Marketing Services"
        />
        <meta name="keywords" content="block-chain development services in nagercoil, block-chain development services, Block-chain app development company, block-chain development companies, block-chain technology, block-chain software development company in nagercoil, block-chain software dev company, Block-chain for development"/>
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
      <Banner/>
      <BlockChainImage />
      <BlockChainServices />
      <BlockChainPlatform/>
    </Fragment>
  )
}

export default index