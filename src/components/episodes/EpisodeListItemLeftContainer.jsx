import React from 'react'
import PropTypes from 'prop-types';
import sampleImage from '../assets/common-sample-image.png';

function EpisodeListItemLeftContainer({episodeCover}) {
    return (
        <img 
            src={episodeCover} 
            alt="" 
            className='h-[90px] w-[80px] object-fill' 
        />
    )
}

EpisodeListItemLeftContainer.defaultProps = {
    episodeCover: sampleImage,
}

EpisodeListItemLeftContainer.propTypes = {
    episodeCover: PropTypes.string,
}

export default EpisodeListItemLeftContainer