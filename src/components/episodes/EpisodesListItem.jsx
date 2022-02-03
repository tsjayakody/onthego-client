import React from 'react';
import {FaPlay} from 'react-icons/fa';

function EpisodesListItem({episodeCover, episodeTitle, episodeCategory, noofepisodes, episodeDate}) {

    const onClick = ()=>(console.log('play button pressed'));

  return (
    <div className='w-full h-[90px] bg-gradient-to-b from-#2F2566 to-[#110E1F]/0'>
    <div className='flex'>
      <img src={episodeCover} alt="" className='h-[90px] w-[80px] object-fill'/>
      <div className='flex-grow flex-col'>
        <div className=' h-[33px] w-full0 relative'>
          <p className='text-#666666 text-[9px] uppercase pl-[7px] pb-[3px] absolute bottom-0 left-0'>{episodeCategory}</p>
          <div className='bg-gradient-to-b from-[#000000]/40 to-[#282828]/18 h-[11px] w-[102px] rounded-r-20 rounded-l-20  absolute top-[3px] right-[3px]'>
            <p className='text-[6px] text-#FFFFFF text-center'>{episodeDate}- {noofepisodes}</p>
          </div>
        </div>
        <div className='h-[57px] w-full bg-#282246 flex'>
          <p className='text-#FFFFFF text-[11px] font-medium pt-[8px] pl-[8px] w-[183px] text-left'>{episodeTitle}</p>
          <button onClick={onClick} className='rounded-full'>
              <div className='rounded-full bg-[#6654C5] h-[40px] w-[40px] relative'>
                <FaPlay className='text-[#00D2CB] h-[20px] w-[18px] m-auto absolute top-3 left-3'/>
              </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default EpisodesListItem;
