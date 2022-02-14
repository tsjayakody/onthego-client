import React from 'react';
import { Link } from 'react-router-dom';

function ShowsRecentlyUpdatedContainer({ showsCover, showsTitle, showsDate }) {
    return (
        <Link to='/shows/showsdetails'>
            <div className='bg-transparent md:bg-#282246 h-204 w-138 md:h-198 md:w-150 mr-[38px] mb-[41px] md:mb-[34px] '>
                {/* image banner here */}
                <img src={showsCover} alt="" className='h-138 w-138 md:h-140 md:w-150 object-fill' />
                <div className='w-138 md:w-150'>
                    {/* title here */}
                    <p className='text-#FFFFFF text-[12px] text-center '>
                        {showsTitle}
                    </p>
                    {/* date here */}
                    <p className='text-#666666 text-[11px] md:text-[10px] text-right pr-[3px]'>
                        {showsDate}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ShowsRecentlyUpdatedContainer;
