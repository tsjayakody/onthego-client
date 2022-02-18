import React from 'react'
import PropTypes from 'prop-types'

function EpisodeListItemRightContainerTopBar({
    episodeCategory,
    episodeDate,
    noofepisodes
}) {
    return (
        <div className=' h-[33px] w-full relative'>
            <p className='text-#666666 text-[9px] uppercase pl-[7px] pb-[3px] absolute bottom-0 left-0'>{episodeCategory}</p>
            <div className='bg-gradient-to-b from-[#000000]/40 to-[#282828]/18 md:h-[16px] md:w-[141px] h-[11px] w-[102px] rounded-r-20 rounded-l-20  absolute top-[0px] right-[0px] md:mr-[26px] md:mt-[11px]'>
                <p className='text-[6px] md:text-[8px] text-#FFFFFF text-center md:px[9px] md:py-[2px]'>{episodeDate}- {noofepisodes}</p>
            </div>
        </div>
    )
}

EpisodeListItemRightContainerTopBar.defaultProps = {
    episodeCategory: '',
    episodeDate: '',
    noofepisodes: 0,
}

EpisodeListItemRightContainerTopBar.propTypes = {
    episodeCategory: PropTypes.string,
    episodeDate: PropTypes.string,
    noofepisodes: PropTypes.number,
}

export default EpisodeListItemRightContainerTopBar