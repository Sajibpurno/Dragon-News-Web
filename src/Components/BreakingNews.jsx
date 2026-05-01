import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    "id": "NEWS-001",
    "title": "Global Air Quality Index Hits Record Levels in Major Urban Hubs"
  },
  {
    "id": "NEWS-002",
    "title": "New Breakthrough in Real-time Spatio-Temporal Data Modeling"
  },
  {
    "id": "NEWS-003",
    "title": "Tech Giants Announce Unified Standard for Next-Gen Web Frameworks"
  },
  {
    "id": "NEWS-004",
    "title": "Advancements in Low-Latency Server Rendering for Digital Marketplaces"
  },
  {
    "id": "NEWS-005",
    "title": "Breakthrough in Digital Signal Processing Enhances Wireless Connectivity"
  }
];
const BreakingNews = () => {
    return (
        <div className=' flex items-center gap-4 justify-center bg-gray-200 py-4 container mx-auto rounded-lg px-2'>
            <button className='btn btn-error'>Letest News</button>
            {/* marquee use kore amra running line dekaitase and cursor nile pause er jonne pauseOnhover true kore dice */}
            <Marquee pauseOnHover={true} speed={50} className='text-gray-700 font-Medium'>
              {
                news.map((item) => (
                  <span key={item.id} className='text-lg font-Medium mx-4'>
                    {item.title}
                  </span>
                ))
              }
            </Marquee>
        </div>
    );
};

export default BreakingNews;