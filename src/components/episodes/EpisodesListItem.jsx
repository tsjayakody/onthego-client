import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function EpisodesListItem({ index, episodeCover, episodeTitle, episodeCategory, noofepisodes, episodeDate }) {

  const onClick = () => (console.log('play button pressed'));

  return (
    <div className='flex items-center'>
      {/* index div */}
      <div className='text-[#00D2CB] text-[20px] mr-[20px]'>
        <p>{index}.</p>
      </div>
      {/* episode container */}
      <div className='mr-[0px] md:w-[854px] h-[90px] bg-gradient-to-b from-#2F2566 to-[#110E1F]/0 '>
        <Link to='/episodes/episodeslist/episodedetail' className=''>
          <div className='flex'>
            <img src={episodeCover} alt="" className='h-[90px] w-[80px] object-fill' />
            <div className='flex-grow flex-col'>
              <div className=' h-[33px] w-full relative'>
                <p className='text-#666666 text-[9px] uppercase pl-[7px] pb-[3px] absolute bottom-0 left-0'>{episodeCategory}</p>
                <div className='bg-gradient-to-b from-[#000000]/40 to-[#282828]/18 md:h-[16px] md:w-[141px] h-[11px] w-[102px] rounded-r-20 rounded-l-20  absolute top-[0px] right-[0px] md:mr-[26px] md:mt-[11px]'>
                  <p className='text-[6px] md:text-[8px] text-#FFFFFF text-center md:px[9px] md:py-[2px]'>{episodeDate}- {noofepisodes}</p>
                </div>
              </div>
              <div className='h-[57px] w-full bg-#282246 flex justify-between'>
                <p className='text-#FFFFFF text-[11px] font-medium pt-[8px] pl-[8px] w-[183px] text-left'>{episodeTitle}</p>
                <button onClick={onClick} className='md:pr-[27px]'>
                  <div className='rounded-full bg-[#6654C5] md:bg-[#453598] h-[40px] w-[40px] md:w-[140px] md:h-[40px] flex items-center justify-around'>
                    <FaPlay className='text-[#00D2CB] h-[20px] w-[18px] md:h-[14px] md:w-auto ' />
                    <p className='text-[10px] text-[#00D2CB] uppercase '>listen now</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EpisodesListItem;
