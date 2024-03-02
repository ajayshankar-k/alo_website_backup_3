import React, { Fragment } from 'react'
import Image from '@/components/common/image';
import One from "@/styles/assets/46.svg";
import Two from "@/styles/assets/45.svg";
import Three from "@/styles/assets/44.svg";
import Four from "@/styles/assets/43.svg";
import Five from "@/styles/assets/42.svg";
import Six from "@/styles/assets/41.svg";
import Seven from "@/styles/assets/one.svg";
import Eight from "@/styles/assets/two.svg";

const CombineImg = () => {
    return (
        <Fragment>
            <Image src={Seven.src} alt={Seven.src} className="ring" />
            <div className="combine-img">
                <h3>We are </h3>
                <h2> A trendsetter and team where<br></br> work feels like a cool adventure </h2>
                <div className="combine-parent">
                    <div className="combine">
                        <div className="one-img">
                            <Image src={One.src} alt={One.src} />
                        </div>
                        <div className="two-img">
                            <Image src={Two.src} alt={Two.src} />
                        </div>
                    </div>
                    <div className="combine">
                        <div className="three-img">
                            <Image src={Three.src} alt={Three.src} />
                        </div>
                        <div className="four-img">
                            <Image src={Four.src} alt={Four.src} />
                        </div>
                    </div>
                    <div className="combine">
                        <div className="five-img">
                            <Image src={Five.src} alt={Five.src} />
                        </div>
                        <div className="six-img">
                            <Image src={Six.src} alt={Six.src} />
                        </div>
                    </div>
                </div>
            </div>
            <Image src={Eight.src} alt={Eight.src} className="rings" />
            <Image src={Seven.src} alt={Seven.src} className="ring-new" />
        </Fragment>
    )
}
export default CombineImg