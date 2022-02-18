import React from 'react';
import PropTypes from 'prop-types';

function ShowsAlphabeticalBannerLetter({letter}) {
    return (
        <div className='flex  bg-#1B1730 h-[17px] md:h-[25px] items-center md:max-w-[934px]'>
            <p className='text-#00D2CB text-[20px] text-center'>{letter}</p>
        </div>
    );
}

ShowsAlphabeticalBannerLetter.defaultProps = {
    letter: '',
}

ShowsAlphabeticalBannerLetter.propTypes = {
    letter: PropTypes.string,
}

export default ShowsAlphabeticalBannerLetter;
