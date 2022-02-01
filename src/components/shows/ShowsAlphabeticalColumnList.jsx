import React from 'react';
import ShowsAlphabeticalBannerLetter from './ShowsAlphabeticalBannerLetter';
import ShowsCategoryBanner from './ShowsCategoryBanner';

function ShowsAlphabeticalColumnList({letter}) {
    return (
        <div className='pb-[37px]'>
            {/* leter container here - A */}
            <ShowsAlphabeticalBannerLetter letter={letter} />
            {/* shows post container */}
            <div className='flex pt-[14px]'>
                <ShowsCategoryBanner />
            </div>
        </div>
    );
}

export default ShowsAlphabeticalColumnList;
