import React from 'react'
import popularepisodes from '../../data/PopularEpisodes'
import PopularEpisodeExpanedListItem from '../episodes/PopularEpisodeExpanedListItem';
import Topbar from '../shared/Topbar'

function PopularEpisodes() {
  return (
    <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            <div className='flex flex-col h-screen'>
                <div className='py-1'>
                    <Topbar />
                </div>
                <div className='flex-1 overflow-y-auto'>
                    <div className='flex flex-col ml-[61px] mt-[71px]'>
                        {/* category title here */}
                        <p className='text-#FFFFFF text-18px mb-[15px]'> Popular Episodes</p>
                        {/* grid here */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[28px] md:mt-[15px] mt-[30px] mr-[20px]'>
                        {popularepisodes.map((item) => (
                        <PopularEpisodeExpanedListItem
                            key={item.id}
                            episodeImage={item.episodeCover}
                            episodeTitle={item.episodeTitle}
                            episodeCategory={item.episodeCategory}
                            episodeDuration={item.episodeTime}
                        />
                    ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PopularEpisodes