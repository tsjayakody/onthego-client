import React from 'react';

function HomeContainerEpisodes({ bannerImage, bannerTitle, bannerCreator }) {
    return (
        <div className='flex flex-col justify-start md:h-164 md:w-119 md:bg-#282246 bg-transparent h-183 w-138'>
            <img src={bannerImage} className='object-cover md:h-119 md:w-119 md:pt-0 h-138 w-138' alt="" />
            <p className='text-#FFFFFF md:text-[10px] text-[12px] truncate'>{bannerTitle}</p>
            <p className='text-#666666 md:text-[10px] text-[11px] truncate'>{bannerCreator}</p>
        </div>
    );
}

export default HomeContainerEpisodes;
