import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const Midbar = ({newsByCategoriesId}) => {
    return (
        <div>
  <h2 className="font-bold text-3xl mb-5">News by category</h2>
  {newsByCategoriesId.length > 0 ? (
    newsByCategoriesId.map((news) => (
      <div key={news._id} className="card bg-base-100 border border-gray-200 rounded-lg shadow-sm mb-8">
        
        {/* Card Header: Author Info */}
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-t-lg">
          <div className="flex items-center gap-3">
            <img src={news.author?.img} alt="author" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-bold text-sm text-gray-700">{news.author?.name || "Unknown"}</p>
              <p className="text-xs text-gray-500">{news.author?.published_date || "No date"}</p>
            </div>
          </div>
          <div className="flex gap-2 text-gray-500">
            <button className="btn btn-ghost btn-xs px-0"><CiBookmark /></button>
            <button className="btn btn-ghost btn-xs px-0"><CiShare2 /></button>
          </div>
        </div>

        {/* Card Content */}
        <div className="card-body p-5">
          <h2 className="card-title text-xl font-bold mb-4">{news.title}</h2>
          
          <figure className="mb-4">
            <img 
              src={news.image_url} 
              alt={news.title} 
              className="w-full h-auto rounded-lg"
            />
          </figure>

          <p className="text-gray-500 text-sm leading-relaxed">
            {news.details.length > 250 ? (
              <>
                {news.details.slice(0, 250)}... 
                <span className="text-orange-500 font-semibold cursor-pointer ml-1">
                  <Link href={`/news/${news._id}`}>Read More</Link>
                </span>
              </>
            ) : (
              news.details
            )}
          </p>

          <div className="divider my-2"></div>

          {/* Card Footer: Rating and Views */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="rating rating-sm">
                {[...Array(5)].map((_, i) => (
                  <input 
                    key={i} 
                    type="radio" 
                    className={`mask mask-star-2 bg-orange-400 ${i < Math.round(news.rating?.number || 0) ? '' : 'bg-gray-300'}`} 
                    disabled 
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">{news.rating?.number}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <i className="fa-regular fa-eye"></i>
              <span>{news.total_view || 0}</span>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-xl font-medium text-center mt-20">No news found for this category.</p>
  )}
</div>
    );
};

export default Midbar;