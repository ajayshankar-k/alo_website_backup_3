import React from 'react';
import Button from '@/components/common/button';
import HyperLink from '@/components/common/link';

const Slogan = () => {
    return (
        <div className="slogan">
            <div className="slogan-area">
                <div className="slogan-content">
                    <h2>Interested to discover how your business can achieve strategic outcomes with Alo Info-Tech? </h2>
                </div>
                <div className="slogan-btn">
                    <HyperLink href="/contact-us" text={
                        <Button label="Contact Us" />} />
                </div>
            </div>
        </div>
    )
}
export default Slogan