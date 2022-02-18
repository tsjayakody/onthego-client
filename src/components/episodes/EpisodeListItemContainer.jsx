import React from 'react'
import EpisodeListItemLeftContainer from './EpisodeListItemLeftContainer'
import EpisodeListItemRightContainer from './EpisodeListItemRightContainer'

function EpisodeListItemContainer({
    episodeCover,
    episodeCategory,
    episodeDate,
    noofepisodes,
    onClick,
    episodeTitle,
}) {
    return (
        <div className='flex'>
            <EpisodeListItemLeftContainer
                episodeCover={episodeCover}
            />
            <EpisodeListItemRightContainer
                episodeCategory={episodeCategory}
                episodeDate={episodeDate}
                noofepisodes={noofepisodes}
                episodeTitle={episodeTitle}
                onClick={onClick}
            />
        </div>
    )
}

export default EpisodeListItemContainer