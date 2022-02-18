import React from 'react';
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types'

function PopularEpisode({
    episodeImage,
    episodeTitle,
    episodeCategory,
    episodeDuration
}) {
    return (
        <div className='bg-#282246 h-70 w-260'>
            <div className='flex items-start'>
                <img src={episodeImage} alt="" className='h-70 w-70 object-fill' />
                <div className='flex flex-col pl-[29px] pb-[11px] pt-[14px] justify-evenly'>
                    <p className='text-#FFFFFF text-12px pb-[8px] truncate'>{episodeTitle}</p>
                    <p className='text-#666666 text-10px pb-[8px] truncate'>{episodeCategory}</p>
                    <p className='text-#FFFFFF text-10px'>{episodeDuration}</p>
                </div>
            </div>
        </div>
    );
}

PopularEpisode.defaultProps = { 
    episodeImage: sampleImage,
    episodeTitle: '',
    episodeCategory: '',
    episodeDuration: '',
}

PopularEpisode.propTypes = {
    episodeImage: PropTypes.any,
    episodeTitl: PropTypes.string,
    episodeCategory: PropTypes.string,
    episodeDuration: PropTypes.number,
}

export default PopularEpisode;
