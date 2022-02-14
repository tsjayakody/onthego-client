import React from 'react'
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types';

function EpisodeDetailRightContainer({sampleImage}) {
  return (
    <div>
       <img src={sampleImage} alt="" className='w-[150px] md:w-[268px] h-[150px] md:h-[244px] object-fill mx-auto md:mx-[0px]' />
    </div>
  )
}

EpisodeDetailRightContainer.defaultProps = {
  sampleImage: sampleImage,
}

EpisodeDetailRightContainer.propTypes = {
  sampleImage: PropTypes.any,
}

export default EpisodeDetailRightContainer