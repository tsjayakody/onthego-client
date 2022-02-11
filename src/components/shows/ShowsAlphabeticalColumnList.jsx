import React from 'react';
import shows from '../../data/Shows';
import ShowsAlphabeticalBannerLetter from './ShowsAlphabeticalBannerLetter';
import ShowsCategoryBanner from './ShowsCategoryBanner';
import { Link } from 'react-router-dom';

function ShowsAlphabeticalColumnList({ letter }) {
    return (
        <Link to='/shows/showsdetails'>
            <div className='pb-[37px]'>
                {/* leter container here - A */}
                <ShowsAlphabeticalBannerLetter letter={letter} />
                {/* shows post container */}
                <div className='flex pt-[14px] w-screen md:w-9/12 auto-cols-max md:auto-cols-min overflow-x-auto'>
                    {shows.map((item) => (
                        <ShowsCategoryBanner key={item.id} showsCover={item.showsCover} showsTitle={item.showsTitle} showsDate={item.showsDate} />
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default ShowsAlphabeticalColumnList;
