import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="font-bold text-lg">All Categories</h2>
      <ul className="flex flex-col gap-3 mt-4">
        {categories.map(category => 
        <li className={` p-2 rounded-md font-bold text-center text-md 
        ${activeId === category.category_id && 'bg-purple-500 text-white'}`} key={category.category_id}>
            <Link className='block hover:bg-purple-500  p-2 rounded-md' href={`/category/${category.category_id}`}>
                {category.category_name}
            </Link>
        </li>)}
      </ul>
        </div>
    );
};

export default LeftSidebar;