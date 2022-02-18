import React from 'react'
import EpisodeListItemRightContainerBottomBar from './EpisodeListItemRightContainerBottomBar';
import EpisodeListItemRightContainerTopBar from './EpisodeListItemRightContainerTopBar';
import PropTypes from 'prop-types'

function EpisodeListItemRightContainer({
    episodeCategory,
    episodeDate,
    noofepisodes,
    episodeTitle,
    onClick,
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


EpisodeListItemRightContainer.defaultProps = {
    episodeCategory: '',
    episodeDate: '',
    noofepisodes: 0,
    episodeTitle: '',
    onClick: ()=>{},
}

EpisodeListItemRightContainer.propTypes = {
    episodeCategory: PropTypes.string,
    episodeDate: PropTypes.string,
    noofepisodes: PropTypes.number,
    episodeTitle: PropTypes.string,
    onClick: PropTypes.func,
}

export default EpisodeListItemRightContainer