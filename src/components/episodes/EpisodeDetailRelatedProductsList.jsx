import React from 'react'
import relatedPodcasts from '../../data/RelatedPodcasts'
import HomeContainerEpisodes from '../home/HomeContainerEpisodes'

function EpisodeDetailRelatedProductsList() {
  return (
    <div className='flex-col lg:mt-[34px] mt-[24px]'>
      <p className='text-#FFFFFF text-[14px] font-semibold'>Related Products</p>
      <div className='flex  ml-[24px] lg:ml-[137px] mr-[69px] mt-[18px] lg:mt-[34px] space-x-[29px] lg:space-x-[31px] overflow-x-auto'>
        {relatedPodcasts.map((item) => (
          <HomeContainerEpisodes
            key={item.id}
            bannerImage={item.podcastCover}
            bannerTitle={item.podcastTtitle}
            bannerCreator={item.podcastCreator}
          />
        ))}
      </div>
    </div>
  )
}

export default EpisodeDetailRelatedProductsList