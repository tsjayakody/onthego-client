import React from 'react';

function PopularEpisode({episodeImage, episodeTitle, episodeCategory, episodeDuration}) {
    return (
        <div className='bg-#282246 h-[4.375rem] w-[16.25rem] mb-[25px]'>
            <div className='flex items-start'>
                <img src={episodeImage} alt="" height='70' width='70'/>
                <div className='flex flex-col pl-[29px] pb-[11px] pt-[14px] justify-evenly'>
                    <p className='text-#FFFFFF text-12px pb-[8px]'>{episodeTitle}</p>
                    <p className='text-#FFFFFF text-10px pb-[8px]'>{episodeCategory}</p>
                    <p className='text-#FFFFFF text-10px'>{episodeDuration}</p>
                </div>
            </div>
        </div>
    );
}

export default PopularEpisode;
