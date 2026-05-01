import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex items-center justify-center flex-col gap-4'>
            <h2 className=' font-bold text-5xl text-red-500'>This page is not found | 404</h2>
            <Link href="/" >
             <button className='btn btn-primary'>Back to Home</button></Link>
        </div>
    );
};

export default NotFoundPage;