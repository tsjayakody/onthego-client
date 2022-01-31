import React from 'react';

function HomeContainerEpisodes({ bannerImage, bannerTitle, bannerCreator }) {
    return (
        <div className='h-44 w-28 bg-#28224 mr-[31px]'>
            <img src={bannerImage} height='108' width='119' alt="" />
            <p className='text-#FFFFFF text-xs'>{bannerTitle}</p>
            <p className='text-#666666 text-xs'>{bannerCreator}</p>
        </div>
    );
}

export default HomeContainerEpisodes;
