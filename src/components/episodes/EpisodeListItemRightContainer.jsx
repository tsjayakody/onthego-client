import React from 'react'
import EpisodeListItemRightContainerBottomBar from './EpisodeListItemRightContainerBottomBar'
import EpisodeListItemRightContainerTopBar from './EpisodeListItemRightContainerTopBar'

function EpisodeListItemRightContainer({
    episodeCategory,
    episodeDate,
    noofepisodes,
    episodeTitle,
    onClick,
    musicPlayButtonCircle
}) {
    return (
        <div className='flex-grow flex-col'>
            <EpisodeListItemRightContainerTopBar 
                episodeCategory={episodeCategory} 
                episodeDate={episodeDate} 
                noofepisodes={noofepisodes}
            />
            <EpisodeListItemRightContainerBottomBar 
                onClick={onClick}
                episodeTitle={episodeTitle}
            />
        </div>
    )
}

export default EpisodeListItemRightContainer