import React from 'react';
import { Link } from 'react-router-dom';

function EpisodeCategoryContainer({episodeNumber, episodeCover, episodeCategory}) {
  return (
    <Link to="/episodes/episodeslist" className='flex items-center focus:outline-none'>
      <div className='bg-transparent h-192 w-170 md:h-179 md:w-150 relative'>
    {/* image/banner here */}
    <img src={episodeCover} alt=""className='object-cover h-170 w-170 md:h-150 md:w-150'/>
    {/* category yte here */}
    <div className='bg-#282246 flex justify-center items-center h-[2.5rem] w-full'>
        <p className='text-#FFFFFF text-14px'>{episodeCategory}</p>
    </div>
    <div className='bg-gradient-to-b from-#000000/60 to-#282828 opacity-85 rounded-r-20 rounded-l-20 h-[21px] w-[101px] absolute top-[3px] right-[3px] text-center'>
      <p className='text-#FFFFFF text-[12px]'>{episodeNumber} Ep</p>
    </div>
  </div>
    </Link>
    
  );
}

export default EpisodeCategoryContainer;
