import React from 'react'
import One from "@/styles/assets/blog2.svg";
import Two from "@/styles/assets/blog1.svg";
import Three from "@/styles/assets/blog3.svg";
import Four from "@/styles/assets/126.svg";
import Arrow from "@/styles/assets/15.svg";
import Image from '@/components/common/image';
import Link from 'next/link';

const Blog = () => {
    return (
        <div className="blog-parent">
            <h3>Journey into Thoughtful Perspectives </h3>
            <h2>Blogs</h2>
            <div className="blog-child">
                <Link href="/5Gs-potential" target='__'>    
                    <div className="blog-split">
                        <div className="blog-card">
                            <div className='blog_image'>
                            <Image src={One.src} alt={One.src} />
                            </div>
                            <p>5G&#39;s Impact on Mobile Development :
                                Trends, Challenges, Solutions Ahead</p>
                            <div className="arrow">
                                <Image src={Arrow.src} alt={Arrow.src} />
                            </div>
                        </div>
                    </div>
                </Link>
                
                

                <Link href="/Alo-hub" target='__'>
                    <div className="blog-split">
                        <div className="blog-card">
                            <div className='blog_image'>
                            <Image src={Two.src} alt={Two.src} />
                            </div>
                            <p>Unlocking Your Potential : Practical IT Courses at
                                Alo Educational Hub</p>
                            <div className="arrow">
                                <Image src={Arrow.src} alt={Arrow.src} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/Alo-invoice" target='__'>
                    <div className="blog-split">
                        <div className="blog-card">
                            <div className='blog_image'>
                            <Image src={Three.src} alt={Three.src} />
                            </div>  
                            <p><span> Alo Invoice : Revolutionizing</span> <span>Restaurant  Service,</span><br></br><span> No
                                More Waiting</span> </p>
                            <div className="arrow">
                                <Image src={Arrow.src} alt={Arrow.src} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/fast-x" target='__'>
                    <div className="blog-split">
                        <div className="blog-card">
                            <div className='blog_image'>
                            <Image src={Four.src} alt={Four.src} />
                            </div>
                            <p>FastX : Alo Infotech&#39;s Revolutionary Delivery App for
                                Individuals, Businesses</p>
                            <div className="arrow">
                                <Image src={Arrow.src} alt={Arrow.src} />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Blog