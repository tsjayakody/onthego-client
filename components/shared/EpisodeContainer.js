import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playerState } from '../../atoms/playerAtom'


function EpisodeContainer({ data }) {

    const [musicData, setMusicData] =
        useRecoilState(playerState)

    const setSong = () => {
        if (data.media_url) {
            setMusicData(data)
        }
    }

    return (
        <div className='bg-[#282246] min-h-[164px] w-[119px] flex-shrink-0 cursor-pointer hover:opacity-75' onClick={()=>setSong()}>
            <img src={data.episode_image} alt="" className='h-[108px] w-[119px] object-fill' />
            <div className='space-y-[2px]'>
                <p className='text-white text-[10px] mx-[10px] mt-[4px] font-[400]'>{data.show.name}</p>
                <p className='text-[#666666] text-[10px] font-[400] mx-[10px]'>{data.tags[0].text}</p>
            </div>
        </div>
    )
}

export default EpisodeContainer