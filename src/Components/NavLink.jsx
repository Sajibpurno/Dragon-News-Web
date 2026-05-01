'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    
    const isActive = pathname === href;
    
    return (
        <Link 
         href={href}
         className={`${isActive ? 'border-b-4 border-b-purple-500' :''}`}>
            {children}
        </Link>
    );
};

export default NavLink;