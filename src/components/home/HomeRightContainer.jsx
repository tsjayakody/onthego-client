import React from 'react'
import popularepisodes from '../../data/PopularEpisodes'
import HomeRowContainerTitle from './HomeRowContainerTitle'
import PopularEpisode from './PopularEpisode'
import useRipple from "use-ripple-hook";


// absolute top-[59px] right-[22px] bottom-[150px]

function HomeRightContainer() {
    
    const [ripple, event] = useRipple();

    return (
        <div className='w-full h-full  flex-col hidden md:inline'>
            {/* popular episodes */}
            <div className='md:pt-[117px]'>
                <HomeRowContainerTitle rowTitle='Popular Episodes' />
                <div className='w-10/12 flex flex-col space-y-[25px]'>
                    {popularepisodes.map((item) => (
                        <PopularEpisode
                            key={item.id}
                            episodeImage={item.episodeCover}
                            episodeTitle={item.episodeTitle}
                            episodeCategory={item.episodeCategory}
                            episodeDuration={item.episodeTime}
                        />
                    ))}
                </div>
                {/* view all sample button */}
                <div className='pt-[42px]'>
                    <button ref={ripple} onMouseDown={event} className='bg-#282246 h-[25px] w-[260px] ' >
                        <p className='text-#FFFFFF text-[10px]'>View All</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomeRightContainer