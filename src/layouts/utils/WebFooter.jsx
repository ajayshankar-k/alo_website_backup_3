import React from 'react'
import HyperLink from '@/components/common/link';
import Image from '@/components/common/image';
import Linkedin from '@/styles/assets/link.svg';
import Facebook from '@/styles/assets/fb.svg';
import Instagram from '@/styles/assets/insta.svg';
import Logo from '@/styles/assets/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';


const WebFooter = () => {

    const router = useRouter();



    return (
        <footer>
            <div className="area">
                <div className="hr-area">
                    <div className="logo">
                        <Link href="/">
                            <Image src={Logo?.src} alt={Logo.src} />
                        </Link>
                    </div>
                    <div className="email">
                        <h2>{router.pathname !== "/careers" ? "contact@aloinfotech.in" : "hr@aloinfotech.in"}</h2>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-content">
                    <h3>Contact Us</h3>
                    <Link href='tel:+919994725508'><h2>+91 99 9472 5508</h2></Link>
                    <a href="mailto:contact@aloinfotech.in"><p>contact@aloinfotech.in</p></a>
                    <Link target='blank' href='https://maps.app.goo.gl/HgPi3h1ABtaDNajJ7'>
                    <ul>
                        <li>St.Hindu college road,</li>
                        <li>Chettikulam, Nagercoil,</li>
                        <li>TamilNadu 629002</li>
                    </ul>
                    </Link>
                    <span><HyperLink href="https://www.facebook.com/profile.php?id=100092521095313&mibextid=eHce3h" text={<Image src={Facebook.src} alt={Facebook.src} />} target="_" /><HyperLink href="https://www.instagram.com/alo_info_tech?igsh=ZGNjOWZkYTE3MQ==" text={<Image src={Instagram.src} alt={Instagram.src} />} target="__" /><HyperLink href="https://www.linkedin.com/company/alo-info-tech/" text={<Image src={Linkedin.src} alt={Linkedin.src} />} target="___" /></span>
                </div>
                <div className="footer-content">
                    <h3>Links</h3>
                    <ul>
                        <li><HyperLink href="/" text="Home" /></li>
                        <li><HyperLink href="/about-us" text="About Us" /></li>
                        <li><HyperLink href="/careers" text="Careers" /></li>
                        <li><HyperLink href="/events" text="Events" /></li>
                        
                        <li><HyperLink href="/faq" text="Faq" /></li>
                        <li><HyperLink href="/privacy-policy" text="Privacy Policy" /></li>
                        <li><HyperLink href="/terms-condition" text="Terms and Condition" /></li>
                        <li><HyperLink href="/contact-us" text="Contact Us" /></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Services</h3>
                    <ul>
                        <li><HyperLink href="/AI-services" text="AI services" /></li>
                        <li><HyperLink href="/mobile-app-development" text="Mobile app development" /></li>
                        <li><HyperLink href="/website-development" text="Website development" /></li>
                        <li><HyperLink href="/blockchain-development" text="Block chain development" /></li>
                        <li><HyperLink href="/Products-and-trials" text="All Products & Trials" /></li>
                        <li><HyperLink href="/IT-Consulting" text="IT consulting" /></li>
                        
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Product</h3>
                    <ul>
                        <li><HyperLink href="/" text="Alo Invoice" /></li>
                        <li><HyperLink href="/" text="Fast X" /></li>
                        <li><HyperLink href="/" text="Alo Foodie" /></li>
                    </ul>
                </div>
            </div>
            <div className="alo-footer__copyright">
                <Link target='blank' href={'https://attendence.alogroups.com/'}><p>&copy; {new Date().getFullYear()} Alo Info-Tech. All Rights Reserved</p></Link>
            </div>
        </footer>
    )
}
export default WebFooter