import React from 'react'
import coverplaceholder from '../assets/placeholder-cover-image.svg';
import PropTypes from 'prop-types';

function EpisodeDetailRightContainer({sampleImage}) {
  return (
    <div>
       <img src={sampleImage} alt="" className='w-[150px] md:w-[268px] h-[150px] md:h-[244px] object-fill mx-auto md:mx-[0px]' />
    </div>
  )
}

EpisodeDetailRightContainer.defaultProps = {
  sampleImage: coverplaceholder,
}

EpisodeDetailRightContainer.propTypes = {
  sampleImage: PropTypes.any,
}

export default EpisodeDetailRightContainer