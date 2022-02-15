import React from 'react'
import featuredepisodes from '../../data/FeaturedEpisodes'
import hosts from '../../data/Hosts'
import latestepisodes from '../../data/LatestEpisodes'
import HomeContainerEpisodes from './HomeContainerEpisodes'
import HomeRowContainerTitle from './HomeRowContainerTitle'
import HomeContainerHostCard from './HomeContainerHostCard';

function HomeLeftContainer() {
    return (
        <div className='flex-col mt-[32px] ml-[26px] md:mt-[59px] md:ml-[59px]'>
            <div className='pt-[388px] pr-[20px]'>
                {/* latest episodes */}
                <div className='  pb-[19px] md:pb-[30px]'>
                    <HomeRowContainerTitle rowTitle='Latest Episodes' />
                    {/* dynmic list here */}
                    <div className='flex space-x-[16px] md:space-x-[31px] w-full overflow-x-auto'>
                        {latestepisodes.map((item) => (
                            <HomeContainerEpisodes
                                key={item.id}
                                bannerImage={item.episodeCover}
                                bannerTitle={item.episodeName}
                                bannerCreator={item.episodeOwner}
                            />
                        ))}
                    </div>
                </div>
                {/* featured episodes */}
                <div className='pb-[27px] md:pb-[30px]'>
                    <HomeRowContainerTitle rowTitle='Featured Episodes' />
                    {/* dynmic list here */}
                    <div className='flex space-x-[16px] md:space-x-[31px] w-full overflow-x-auto'>
                        {featuredepisodes.map((item) => (
                            <HomeContainerEpisodes
                                key={item.id}
                                bannerImage={item.episodeCover}
                                bannerTitle={item.episodeName}
                                bannerCreator={item.episodeOwner}
                            />
                        ))}
                    </div>
                </div>
                {/* meet the hosts */}
                <div className=''>
                    <div className='flex'>
                        <HomeRowContainerTitle rowTitle='Meet The Hosts' />
                        <div className='flex items-center text-#666666 text-[11px] pt-[7px]'>
                            <p>Browse All{'>'}{'>'}</p>
                        </div>
                    </div>
                    <div className='flex space-x-[55px]'>
                        {hosts.map((item) => (
                            <HomeContainerHostCard
                                key={item.id}
                                bannerImage={item.hostCover}
                                bannerTitle={item.hostName}
                                bannerType={item.host}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLeftContainer