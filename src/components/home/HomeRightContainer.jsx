import React from 'react'
import popularepisodes from '../../data/PopularEpisodes'
import HomeRowContainerTitle from './HomeRowContainerTitle'
import PopularEpisode from './PopularEpisode'
import useRipple from "use-ripple-hook";
import { Link } from 'react-router-dom';


// absolute top-[59px] right-[22px] bottom-[150px]

function HomeRightContainer() {

    const [ripple, event] = useRipple();

    return (
        <div className='w-full h-full  flex-col hidden md:inline'>
            {/* popular episodes */}
            <div className='md:pt-[10px]'>
                <HomeRowContainerTitle rowTitle='Popular Episodes' />
                <div className='w-10/12 flex flex-col space-y-[25px]'>
                    {popularepisodes.slice(0, 5).map((item) => (
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
                    <Link to={'/popularepisodes'}>
                        <button ref={ripple} onMouseDown={event} className='bg-#282246 hover:text-#00D2CB h-[25px] w-[260px] ' >
                            <p className='text-#FFFFFF hover:text-#00D2CB text-[10px]'>View All</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeRightContainer