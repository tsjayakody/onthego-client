import React from 'react';

function ShowsAlphabeticalBannerLetter({letter}) {
    return (
        <div className='flex  bg-#1B1730 h-[17px] md:h-[25px] items-center'>
            <p className='text-#00D2CB text-[20px] text-center'>{letter}</p>
        </div>
    );
}

export default ShowsAlphabeticalBannerLetter;
