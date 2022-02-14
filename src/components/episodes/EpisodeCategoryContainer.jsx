import React from 'react';
import { Link } from 'react-router-dom';
import StackNumberPill from '../shared/StackNumberPill';

function EpisodeCategoryContainer({ episodeNumber, episodeCover, episodeCategory }) {
  return (
    <Link to="/episodes/episodeslist" className='flex items-center focus:outline-none'>
      <div className='bg-transparent h-192 w-170 md:h-179 md:w-150 relative'>
        {/* image/banner here */}
        <img src={episodeCover} alt="" className='object-cover h-170 w-170 md:h-150 md:w-150' />
        {/* category yte here */}
        <div className='bg-#282246 flex justify-center items-center h-[2.5rem] w-full'>
          <p className='text-#FFFFFF text-14px'>{episodeCategory}</p>
        </div>
        <StackNumberPill episodeNumber={episodeNumber} />
      </div>
    </Link>
  );
}

export default EpisodeCategoryContainer;
