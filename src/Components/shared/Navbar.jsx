'use client';
import Link from 'next/link';
import React, { use } from 'react';
import userPlaceholder from '@/assets/user.png';
import Image from 'next/image';
import NavLink from '../NavLink';
import { authClient, useSession } from '@/lib/auth-client';

const Navbar = () => {
    const {data: session, isPending} = authClient.useSession();
    
    if (isPending) return <p>Loading...</p>;
    const user = session?.user;
    console.log('session data', user);

    const handleLogout = async () => {
        await authClient.signOut();
    };
    
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
            {/* user part */}

        {isPending ? ('Loading..') : user ? (
            <div className="flex items-center gap-2">
            <h2>Hello, {user.name}</h2>
            <Image src={user.image ||userPlaceholder} alt="User" width={50} height={50} className='rounded-full' />

            <button className='btn bg-purple-500 text-white rounded-lg' onClick={handleLogout}>Logout</button>
        </div>) : (
           <div className='flex items-center gap-2'>
            <Image src={userPlaceholder} alt="User" width={50} height={50} className='rounded-full' />
        <button className='btn bg-purple-500 text-white'><Link href="/login">Login</Link></button>
           </div>
        )}
        </div>
    );
};

export default Navbar;