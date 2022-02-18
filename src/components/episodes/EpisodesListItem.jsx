import React from 'react';
import { Link } from 'react-router-dom';
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types';
import EpisodeListItemContainer from './EpisodeListItemContainer';

function EpisodesListItem({
  index,
  episodeCover,
  episodeTitle,
  episodeCategory,
  noofepisodes,
  episodeDate
}) {

  const onClick = () => (console.log('play button pressed'));

  return (
    <div className='flex items-center'>
      {/* index div */}
      <div className='text-[#00D2CB] text-[20px] mr-[20px]'>
        <p>{index}.</p>
      </div>
      {/* episode container */}
      <div className='mr-[0px] md:w-[854px] h-[90px] bg-gradient-to-b from-#2F2566 to-[#110E1F]/0 '>
        <Link to='/episodes/episodeslist/episodedetail' className=''>
          <EpisodeListItemContainer 
            episodeCover={episodeCover}
            episodeCategory={episodeCategory}
            episodeDate={episodeDate}
            noofepisodes={noofepisodes}
            onClick={onClick}
            episodeTitle={episodeTitle}
          />
        </Link>
      </div>
    </div>
  );
}

EpisodesListItem.defaultProps = {
  index: 0,
  episodeCover: sampleImage,
  episodeTitle: '_',
  episodeCategory: '_',
  noofepisodes: 0,
  episodeDate: '_'
}

EpisodesListItem.propTypes = {
  index: PropTypes.number,
  episodeCover: PropTypes.any,
  episodeTitle: PropTypes.string,
  episodeCategory: PropTypes.string,
  noofepisodes: PropTypes.number,
  episodeDate: PropTypes.string,
}

export default EpisodesListItem;
