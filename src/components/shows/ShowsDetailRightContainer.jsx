import React from 'react';
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types';

function ShowsDetailRightContainer({
  showsSampleBanner
}) {
  return (
    <img
      src={showsSampleBanner}
      alt="ShowsSampleBanner"
      className='mx-auto h-[150px] w-[150px] md:h-[200px] md:w-[218px] lg:h-[244px] lg:w-[268px] md:mr-[10px] object-fill'
    />
  )
}

ShowsDetailRightContainer.defaultProps = {
  showsSampleBanner: sampleImage,
}

ShowsDetailRightContainer.propTypes = {
  showsSampleBanner: PropTypes.string,
}

export default ShowsDetailRightContainer