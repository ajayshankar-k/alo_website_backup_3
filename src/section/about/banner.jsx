import Button from '@/components/common/button'
import HyperLink from '@/components/common/link'
import React, { Fragment } from 'react'

const Banner = () => {
    return (
        <Fragment>
            <div className="about-banner">
                <div className="banner-section">
                    <h1>About ALO</h1>
                    <p>In a world of constant evolution, Alo Info-Tech is your steadfast partner, guiding you through tech transformations </p>
                    <HyperLink href="/contact-us" text={<Button label="Contact Us" />} />
                </div>
            </div>
        </Fragment> 
    )
}
export default Banner