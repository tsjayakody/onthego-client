import React from 'react';
import categoryBannerSample from '../assets/episode-banner-sample-3.svg';

function EpisodeCategoryContainer() {
  return (
    <div className='bg-transparent h-192 w-170 md:h-179 md:w-150'>
    {/* number stac here */}

    {/* image/banner here */}
    <img src={categoryBannerSample} alt=""className='object-cover h-170 w-170 md:h-150 md:w-150'/>
    {/* category yte here */}
    <div className='bg-#282246 flex justify-center items-center h-[2.5rem] w-full'>
        <p className='text-#FFFFFF text-14px'>Sports</p>
    </div>
  </div>
  );
}

export default EpisodeCategoryContainer;
