import React from 'react'
import PropTypes from 'prop-types';

function EpisodeListItemLeftContainer({episodeCover}) {
    return (
        <img 
            src={episodeCover} 
            alt="" 
            className='h-[90px] w-[80px] object-fill' 
        />
    )
}

EpisodeListItemLeftContainer.propTypes = {
    episodeCover: PropTypes.string,
}

export default EpisodeListItemLeftContainer