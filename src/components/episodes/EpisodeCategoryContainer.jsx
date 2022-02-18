import React from 'react';
import { Link } from 'react-router-dom';
import StackNumberPill from '../shared/StackNumberPill';
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types'

function EpisodeCategoryContainer({ episodeNumber, episodeCover, episodeCategory }) {
  return (
    <Link to="/episodes/episodeslist" className='flex items-center focus:outline-none'>
      <div className='bg-transparent h-192 w-170 md:h-179 md:w-150 '>
        <img src={episodeCover} alt="" className='object-cover h-170 w-170 md:h-150 md:w-150' />
        <div className='bg-#282246 flex justify-center items-center h-[2.5rem] w-full'>
          <p className='text-#FFFFFF text-14px'>{episodeCategory}</p>
        </div>
      </div>
    </Link>
  );
}

EpisodeCategoryContainer.defaultProps = {
  episodeNumber: 0,
  episodeCover: sampleImage,
  episodeCategory: '_',
}

EpisodeCategoryContainer.propTypes = {
  episodeNumber: PropTypes.number,
  episodeCover: PropTypes.any,
  episodeCategory: PropTypes.string,
}

export default EpisodeCategoryContainer;
