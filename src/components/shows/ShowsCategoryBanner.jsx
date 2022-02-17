import React from 'react';
import { Link } from 'react-router-dom';
import StackNumberPill from '../shared/StackNumberPill';

function ShowsCategoryBanner({
    showCover,
    showName,
    episodeList
}) {
    return (
        <Link to='/shows/showsdetails'>
            <div className='bg-transparent h-[192px] w-[170px] md:w-[150px] md:h-[172px] mr-[38px]'>
                <img
                    src={showCover}
                    alt=""
                    height='150'
                    width='150'
                />
                <div className='bg-#282246 flex justify-center items-center h-[2.5rem] w-[9.375rem]'>
                    <p className='text-#FFFFFF text-14px'>
                        {showName}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ShowsCategoryBanner;
