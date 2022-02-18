import React from 'react'
import EpisodeListItemLeftContainer from './EpisodeListItemLeftContainer';
import EpisodeListItemRightContainer from './EpisodeListItemRightContainer';
import sampleImage from '../assets/common-sample-image.png';
import PropTypes from 'prop-types';

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

EpisodeListItemContainer.defaultProps = {
    episodeCover: sampleImage,
    episodeCategory: '',
    episodeDate: '',
    noofepisodes: 0,
    onClick: ()=>{},
    episodeTitle: '',
}

EpisodeListItemContainer.propTypes = {
    episodeCover: PropTypes.string,
    episodeCategory: PropTypes.string,
    episodeDate: PropTypes.string,
    noofepisodes: PropTypes.number,
    onClick: PropTypes.func,
    episodeTitle: PropTypes.string,
}

export default EpisodeListItemContainer