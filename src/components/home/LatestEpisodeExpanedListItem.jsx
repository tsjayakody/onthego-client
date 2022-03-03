import React from 'react';
import PropTypes from 'prop-types';

function LatestEpisodeExpanedListItem({
    episodeCover,
    episodeName,
    episodeCreator
}) {
    return (
        <div className='bg-transparent h-192 w-170 md:h-179 md:w-150 '>
            <img src={episodeCover} alt="" className='object-cover h-170 w-170 md:h-150 md:w-150' />
            <div className='bg-#282246 flex flex-col justify-center items-center h-[2.5rem] w-full'>
                <p className='text-#FFFFFF text-14px'>{episodeName}</p>
                <p className='text-#FFFFFF text-14px'>{episodeCreator}</p>
            </div>
        </div>
    )
}

LatestEpisodeExpanedListItem.defaultProps = {
    episodeCover: '',
    episodeName: '',
    episodeCreator: '',
}

LatestEpisodeExpanedListItem.propTypes = {
    episodeCover: PropTypes.string,
    episodeName: PropTypes.string,
    episodeCreator: PropTypes.string,
}

export default LatestEpisodeExpanedListItem