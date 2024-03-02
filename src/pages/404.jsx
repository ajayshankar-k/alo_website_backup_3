import React, { Fragment } from 'react'
import Not from "@/styles/assets/404.svg";
import Image from '@/components/common/image';

const NotFound = () => {
    return (
        <Fragment>
            <div className="not-found">
                <Image src={Not.src} alt={Not.src} />
            </div>
        </Fragment>
    )
}

export default NotFound