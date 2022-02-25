import React from 'react'

function PopularEpisodeExpanedListItem({
    episodeImage,
    episodeTitle,
    episodeCategory,
    episodeDuration
}) {
    return (
        <div className='bg-#282246 h-[110px] w-[260px]'>
            <div className='flex items-center justify-around'>
                <img src={episodeImage} alt="" className='h-[100px] w-[100px] object-fill' />
                <div className='flex flex-col pl-[29px] pb-[11px] pt-[14px] justify-evenly'>
                    <p className='text-#FFFFFF text-12px pb-[8px] truncate'>{episodeTitle}</p>
                    <p className='text-#666666 text-10px pb-[8px] truncate'>{episodeCategory}</p>
                    <p className='text-#FFFFFF text-10px'>{episodeDuration}</p>
                </div>
            </div>
        </div>
    )
}

export default PopularEpisodeExpanedListItem