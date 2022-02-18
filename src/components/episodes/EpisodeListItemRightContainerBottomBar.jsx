import React from 'react'
import EpisodeListItemRightcontainerButton from './EpisodeListItemRightcontainerButton'

function EpisodeListItemRightContainerBottomBar({
    onClick,
    episodeTitle
}) {
    return (
        <div className='h-[57px] w-[200px] md:w-full bg-#282246 flex justify-between'>
            <p className='text-#FFFFFF text-[11px] font-medium pt-[8px] pl-[8px] md:w-[183px] w-[100px] text-left'>{episodeTitle}</p>
            <EpisodeListItemRightcontainerButton onClick={onClick}/>
        </div>
    )
}

export default EpisodeListItemRightContainerBottomBar