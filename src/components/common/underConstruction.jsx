import React, { Fragment } from 'react';
import Image from './image';
import Under from "@/styles/assets/13.gif";

const underConstruction = () => {
    return (
        <Fragment>
            <div className="txt-center">
                <Image src={Under?.src} alt={Under?.src} />
            </div>
        </Fragment >
    )
}
export default underConstruction