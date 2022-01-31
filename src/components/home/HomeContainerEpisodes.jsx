import React from 'react';

function HomeContainerEpisodes({ bannerImage, bannerTitle, bannerCreator }) {
    return (
        <div className='flex flex-col justify-start h-164 w-119 bg-#282246 md:bg-transparent md:h-183 md:w-138'>
            <img src={bannerImage} className='object-cover h-119 w-119 md:pt-0 md:h-138 md:w-138' alt="" />
            <p className='text-#FFFFFF text-[10px] md:text-[12px] truncate'>{bannerTitle}</p>
            <p className='text-#666666 text-[10px] md:text-[11px] truncate'>{bannerCreator}</p>
        </div>
    );
}

export default HomeContainerEpisodes;
