import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playerState } from '../../atoms/playerAtom'


function PopularEpisodeContainer({ data }) {

    const [musicData, setMusicData] =
        useRecoilState(playerState)

    const setSong = () => {
        if (data.media_url) {
            setMusicData(data)
        }
    }

    return (
        <div className="ml-[53px] mb-[25px] flex h-[70px] w-[260px] bg-[#282246] cursor-pointer hover:opacity-75" onClick={()=>setSong()}>
            <img
                src={data.episode_image}
                alt=""
                className="h-[70px] w-[70px] object-fill"
            />
            <div className="mt-[5px] ml-[30px] flex-col space-y-[3px] text-[12px] text-white">
                <p>{data.show.name}</p>
                <p className="text-[10px] text-[#666666]">{data.tags[0].text}</p>
                <p>03.00</p>
            </div>
        </div>
    )
}

export default PopularEpisodeContainer