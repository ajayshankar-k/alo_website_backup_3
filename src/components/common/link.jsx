import React from 'react';
import Link from 'next/link';

const HyperLink = ({ href, text, target }) => {
    return (
        <Link href={href} target={target}>{text}</Link>
    );
};
export default HyperLink;
