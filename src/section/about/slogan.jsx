import Button from '@/components/common/button'
import Link from '@/components/common/link'
import React, { Fragment } from 'react'

const Slogan = () => {
    return (
        <Fragment>
            <div className="slogan">
                <div className="slogan-area">
                    <div className="slogan-content">
                        <h2>Careers?</h2>
                        <p>Seeking exceptional talent to elevate our software development teams. We value skilled, inspired self-starters who thrive in collaborative, high-pressure environments. </p>
                    </div>
                    <div className="slogan-btn">
                        <Link href="/careers?page=scroll" text={
                            <Button label="Join Us" />} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Slogan