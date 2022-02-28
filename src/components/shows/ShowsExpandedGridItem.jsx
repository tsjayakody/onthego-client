import React from 'react';
import { Link } from 'react-router-dom';

function ShowsExpandedGridItem({
    episodeCover,
    episodeName
}) {
    return (
        <Link to={'/shows/showsdetails'}>
            <div className='bg-transparent h-192 w-170 md:h-179 md:w-150 '>
                <img src={episodeCover} alt="" className='object-cover h-170 w-170 md:h-150 md:w-150' />
                <div className='bg-#282246 flex justify-center items-center h-[2.5rem] w-full'>
                    <p className='text-#FFFFFF text-14px'>{episodeName}</p>
                </div>
            </div>
        </Link>
    )
}

export default ShowsExpandedGridItem