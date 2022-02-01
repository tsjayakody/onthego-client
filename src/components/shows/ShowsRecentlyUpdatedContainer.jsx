import React from 'react';
import episodeBannerSample from '../assets/episodes-banner-sample.svg';

function ShowsRecentlyUpdatedContainer() {
    return (
        <div className='bg-transparent md:bg-#282246 h-204 w-138 md:h-198 md:w-150 mr-[38px] mb-[41px] md:mb-[34px] '>
            {/* image banner here */}
            <img src={episodeBannerSample} alt="" className='h-138 w-138 md:h-140 md:w-150 object-fill' />
            <div className='w-138 md:w-150'>
                {/* title here */}
                <p className='text-#FFFFFF text-[12px] text-center '>Battle of the Blues - Royal Thomian Cricket Encounter</p>
                {/* date here */}
                <p className='text-#666666 text-[11px] md:text-[10px] text-right pr-[3px]'>04/11/2021</p>
            </div>
        </div>  
    );
}

export default ShowsRecentlyUpdatedContainer;
