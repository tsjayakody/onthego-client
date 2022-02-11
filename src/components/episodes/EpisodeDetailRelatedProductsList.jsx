import React from 'react'
import relatedPodcasts from '../../data/RelatedPodcasts'
import HomeContainerEpisodes from '../home/HomeContainerEpisodes'

function EpisodeDetailRelatedProductsList() {
  return (
    <div className='flex-col'>
      <p className='text-#FFFFFF text-[14px] font-semibold'>Related Products</p>
      <div className='flex  ml-[24px] mr-[69px] mt-[18px] space-x-[29px] overflow-x-auto'>
        {relatedPodcasts.map((item) => (
          <HomeContainerEpisodes key={item.id} bannerImage={item.podcastCover} bannerTitle={item.podcastTtitle} bannerCreator={item.podcastCreator} />
        ))}
      </div>
    </div>
  )
}

export default EpisodeDetailRelatedProductsList