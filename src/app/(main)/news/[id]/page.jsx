import { getNewsDetailsById } from '@/lib/data';
import Link from 'next/link';
import React from 'react';

// eita holo specifin item metadatai show korar jonne
export const generateMetadata = async({params}) =>{
    const {id} = await params;
    console.log(id);
    const news = await getNewsDetailsById(id);
    console.log(news);
    
    return{
        title: news.title,
        description: news.details,
    }
    
}

const NewsDetails = async ({params}) => {
    const {id} = await params;
    console.log(id);
    
    const news = await getNewsDetailsById(id);
    console.log(news);
    return (
        <div className=' container mx-auto my-8 card'>
            <h2 className="font-bold text-2xl mb-5 text-gray-800">Dragon News</h2>
      
      <div className="card bg-base-100 border border-gray-200 rounded-lg p-8 shadow-sm">
        {/* Main Image */}
        <figure className="mb-6">
          <img 
            src={news.image_url} 
            alt={news.title} 
            className="w-full rounded-md object-cover"
          />
        </figure>

        <div className="card-body p-0">
          {/* Title */}
          <h1 className="card-title text-3xl font-extrabold text-gray-800 leading-tight mb-4">
            {news.title}
          </h1>

          {/* Full Description/Details */}
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            {news.details}
          </p>

          {/* Back Button Section */}
          <div className="card-actions">
            <Link 
              href={`/category/${news.category_id}`} 
              className="btn btn-secondary bg-[#D72050] hover:bg-[#b01a42] text-white border-none rounded-none px-6 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All news in this category
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default NewsDetails;