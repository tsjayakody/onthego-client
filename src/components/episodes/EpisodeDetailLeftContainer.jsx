import React from 'react'
import EpisodeDetailPodcastButtonContainer from './EpisodeDetailPodcastButtonContainer'

function EpisodeDetailLeftContainer({
  episodeCategory,
  episodeTitle,
  episodeDate,
  noOfEpisodes
}) {
  return (
    <div className='flex-col md:max-w-[650px] md:mr-[11px]'>
      <p className='mx-[60px] md:mx-[0px] md:mb-[25px] text-center md:text-left text-[9px] text-#666666 pt-[19px]'>
        {episodeCategory}
      </p>
      <p className='mx-[44px] my-[7px] md:mx-[0px] md:my-[0px] md:mb-[36px] text-[#00D2CB] md:text-[#FFFFFF] text-[20px] md:text-[26px] text-center md:text-left'>
        {episodeTitle}
      </p>
      <p className='md:mb-[29px] text-#FFFFFF text-[9px] text-center md:text-left'>
        <span>{episodeDate}</span>-<span>{noOfEpisodes}</span>
      </p>
      <EpisodeDetailPodcastButtonContainer />
    </div>
  )
}

export default EpisodeDetailLeftContainer