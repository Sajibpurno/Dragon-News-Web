import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png';
import Image from 'next/image';
import NavLink from '../NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-3 text-gray-700 font-medium'>
                <li>
                    <NavLink href="/">Home</NavLink>
                    </li>
                <li>
                    <NavLink href="/about">About</NavLink>
                    </li> 
                <li>
                    <NavLink href="/contact">Contact</NavLink>
                    </li>
            </ul>
            <div className="flex items-center gap-2">
                <Image src={user} alt="User" width={60} height={60} className='rounded-full' />

                <button className='btn bg-purple-500 text-white'><Link href="/login">Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;