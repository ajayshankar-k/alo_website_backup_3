import React, { Fragment } from 'react'
import Image from '@/components/common/image';
import Founder from "@/styles/assets/founder.svg";
import Founder2 from "@/styles/assets/founder2.jpg"
import Link from 'next/link';


const FounderPage = () => {
    return (
        <Fragment>
            <div className="founder">
                <h3 className="header-line ">Founder</h3>
                <h2 className='sub-line'>The visionary force behind Alo Infotech</h2>
                <div className="founder-split">
                    <div className="founder-img">
                        <Image src={Founder.src} alt={Founder.src} />
                    </div>
                    <div className="founder-content">
                        <h2>Natarajan.B</h2>
                        <h3>CEO & Founder</h3>
                        <p>Meet Natarajan, the force behind Alo Info-Techs success. He started with just two people, and now theres a big Alo family. People in Nagercoil see him as a tech icon for the youth. His hard work and smart leadership brought us great success. As our leader, hes known for thinking strategically and inspiring others. His ideas helped Alo Info-Tech grow a lot. Natarajan visionary ideas have played a pivotal role in propelling Alo Info-Tech to new heights, contributing significantly to our remarkable growth story. His constant sharing of plans and strategies has been the backbone of our teams development, ensuring that we didnt just grow, but flourished.
                        </p>
                        <p> Aloians owe their success to Natarajan, who envisions innovative transformations in the software field. His forward-thinking approach has positioned us on the cutting edge of technology. Were lucky to have Natarajan leading us to more success at Alo Info-Tech.</p>
                        <br></br>
                        <Link rel="noopener" title="Visit our website" href="https://www.linkedin.com/in/natarajan-b-345178227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " target="_" className='linked-in'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path d="M7.5 5C7.5 6.593 6.435 7.964 4.4985 7.964C2.676 7.964 1.5 6.671 1.5 5.078C1.5 3.443 2.64 2 4.5 2C6.36 2 7.464 3.365 7.5 5ZM1.5 29V9.5H7.5V29H1.5ZM10.5 16.166C10.5 13.8485 10.4235 11.912 10.347 10.2395H15.738L16.005 12.824H16.119C16.878 11.6075 18.738 9.824 21.852 9.824C25.65 9.824 28.5 12.3665 28.5 17.837V29H22.5V18.7085C22.5 16.3175 21.5895 14.4935 19.5 14.4935C17.907 14.4935 17.109 15.7835 16.6905 16.847C16.5375 17.228 16.5 17.759 16.5 18.2915V29H10.5V16.166Z" fill="#1E1E1E" />
                            </svg>
                        </Link>
                    </div>
                </div>
                {/* <div className='founder-split-two'>
                    <div className="founder-content-two">
                    <h2>Velmurugan.K.R</h2>
                        <h3>COO</h3>
                        <p>As we embark on another chapter of growth and innovation, I wanted to take a moment to share some thoughts and advice that I believe will guide us to continued success. Our journey as a company is shaped by the collective efforts of each and every one of you, and I am grateful for the dedication and passion you bring to your work every day.
                        </p>
                        <br></br>
                        <Link rel="noopener" title="Visit our website" href="" target="_" className='linked-in'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                                <path d="M7.5 5C7.5 6.593 6.435 7.964 4.4985 7.964C2.676 7.964 1.5 6.671 1.5 5.078C1.5 3.443 2.64 2 4.5 2C6.36 2 7.464 3.365 7.5 5ZM1.5 29V9.5H7.5V29H1.5ZM10.5 16.166C10.5 13.8485 10.4235 11.912 10.347 10.2395H15.738L16.005 12.824H16.119C16.878 11.6075 18.738 9.824 21.852 9.824C25.65 9.824 28.5 12.3665 28.5 17.837V29H22.5V18.7085C22.5 16.3175 21.5895 14.4935 19.5 14.4935C17.907 14.4935 17.109 15.7835 16.6905 16.847C16.5375 17.228 16.5 17.759 16.5 18.2915V29H10.5V16.166Z" fill="#1E1E1E" />
                            </svg>
                        </Link>
                    </div>
                    <div className="founder2-img">
                        <Image src={Founder2.src} alt={Founder2.src} />
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}
export default FounderPage