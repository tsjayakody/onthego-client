import React from 'react'
import EpisodeDetailSocialMediaButtonContainer from './EpisodeDetailSocialMediaButtonContainer'
import EpisodeDetailTextContainer from './EpisodeDetailTextContainer'

function EpisodeDetailDescriptionContainer() {
    return (
        <div className='md:max-w-[650px] pt-[30px] md:pt-[62px] pr-[26px] flex-col relative'>
            <EpisodeDetailTextContainer />
            <EpisodeDetailSocialMediaButtonContainer />
        </div>
    )
}

export default EpisodeDetailDescriptionContainer