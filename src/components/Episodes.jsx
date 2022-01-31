import React from 'react';
import EpisodeCategoryContainer from './episodes/EpisodeCategoryContainer';

function Episodes() {
    return (
      <div className='bg-#110E1F flex-grow'>
      {/* top bar */}
      {/* navigation button */}      
      {/* search bar */}

      <div className='flex flex-col pl-[61px] pt-[71px]'>
          {/* category title here */}
          <p className='text-#FFFFFF text-18px mb-[15px]'>Categories</p>
          {/* grid here */}
          <div className='grid sm:grid-cols-1 grid-cols-2 md:grid-cols-6 md:pt-[15px] pt-[30px] '>
              <EpisodeCategoryContainer />
              <EpisodeCategoryContainer />
              <EpisodeCategoryContainer />
              <EpisodeCategoryContainer />
              <EpisodeCategoryContainer />
              <EpisodeCategoryContainer />              
          </div>
      </div>

  </div>
      );
}

export default Episodes;
