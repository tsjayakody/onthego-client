import React from 'react'
import EpisodeDetailPodcastButtonContainer from './EpisodeDetailPodcastButtonContainer'
import PropTypes from 'prop-types'

function EpisodeDetailLeftContainer({
  episodeCategory,
  episodeTitle,
  episodeDate,
  noOfEpisodes
}) {
  return (
    <div className='flex-col w-full lg:max-w-[650px] lg:mr-[11px]'>
      <p className='mx-[60px] md:mx-[0px] md:mb-[25px] text-center md:text-left text-[9px] text-#666666 pt-[19px]'>
        {episodeCategory}
      </p>
      <p className='mx-[44px] my-[7px] md:mx-[0px] md:my-[0px] md:mb-[36px] text-[#00D2CB] lg:text-[#FFFFFF] text-[20px] md:text-[20px] lg:text-[26px] text-center md:text-left'>
        {episodeTitle}
      </p>
      <p className='md:mb-[29px] text-#FFFFFF text-[9px] text-center md:text-left'>
        <span>{episodeDate}</span>-<span>{noOfEpisodes}</span>
      </p>
      <EpisodeDetailPodcastButtonContainer />
    </div>
  )
}

EpisodeDetailLeftContainer.defaultProps = {
  episodeCategory: '_',
  episodeTitle: '_',
  episodeDate: '_',
  noOfEpisodes: 0,
}

EpisodeDetailLeftContainer.propTypes = {
  episodeCategory: PropTypes.string,
  episodeTitle: PropTypes.string,
  episodeDate: PropTypes.string,
  noOfEpisodes: PropTypes.number,
}

export default EpisodeDetailLeftContainer