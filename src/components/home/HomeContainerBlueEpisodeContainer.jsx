import React from 'react'
import sampleImage from '../assets/common-sample-image.png';


function HomeContainerBlueEpisodeContainer() {
    return (
        <div className='flex flex-col justify-start md:h-164 md:w-119 md:bg-#282246 bg-transparent h-183 w-138 blur-sm'>
            <img src={sampleImage} className='object-cover md:h-119 md:w-119 md:pt-0 h-138 w-138' alt="" />
            <p className='text-#FFFFFF md:text-[10px] text-[12px] truncate'></p>
            <p className='text-#666666 md:text-[10px] text-[11px] truncate'></p>
        </div>
    )
}

export default HomeContainerBlueEpisodeContainer