import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, text, onClick }) => {
    const router = useRouter();

    const isActive = router.pathname === href;

    return (
        <Link href={href} onClick={onClick} className={isActive ? 'active' : ''}>
            {text}
        </Link>
    );
};
export default NavLink;
