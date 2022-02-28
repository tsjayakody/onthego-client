import React from 'react'
import featuredepisodes from '../../data/FeaturedEpisodes'
import hosts from '../../data/Hosts'
import latestepisodes from '../../data/LatestEpisodes'
import HomeContainerEpisodes from './HomeContainerEpisodes'
import HomeRowContainerTitle from './HomeRowContainerTitle'
import HomeContainerHostCard from './HomeContainerHostCard';
import ImageSlider from '../shared/ImageSlider'
import bannerList from '../../data/TopBannerList'
import { Link } from 'react-router-dom';
import HomeContainerBlueEpisodeContainer from './HomeContainerBlueEpisodeContainer'

function HomeLeftContainer() {
    return (
        <div className='flex-col ml-[26px] md:ml-[59px]'>
            <div className='mt-[112px] ml-[26px] mr-[26px] mb-[32px] lg:mt-[34px] lg:ml-[59px] lg:mr-[113px] lg:mb-[40px]'>
                <ImageSlider bannerList={bannerList} />
            </div>
            <div className='pr-[20px]'>
                {/* latest episodes */}
                <div className='  pb-[19px] md:pb-[30px]'>
                    <HomeRowContainerTitle rowTitle='Latest Episodes' />
                    {/* dynmic list here */}
                    <div className='flex space-x-[16px] md:space-x-[31px] w-full overflow-x-auto'>
                        {latestepisodes.slice(0, 6).map((item, index) => (
                            (index < 5) ? <HomeContainerEpisodes
                                key={item.id}
                                bannerImage={item.episodeCover}
                                bannerTitle={item.episodeName}
                                bannerCreator={item.episodeOwner}
                            /> :
                                <Link to={'/latestepisodes'}>
                                    <HomeContainerBlueEpisodeContainer />
                                </Link>

                        ))}
                    </div>
                </div>
                {/* featured episodes */}
                <div className='pb-[27px] md:pb-[30px]'>
                    <HomeRowContainerTitle rowTitle='Featured Episodes' />
                    {/* dynmic list here */}
                    <div className='flex space-x-[16px] md:space-x-[31px] w-full overflow-x-auto'>
                        {featuredepisodes.slice(0, 6).map((item, index) => (
                            (index < 5) ? <HomeContainerEpisodes
                                key={item.id}
                                bannerImage={item.episodeCover}
                                bannerTitle={item.episodeName}
                                bannerCreator={item.episodeOwner}
                            /> :
                                <Link to={'/featuredepisodes'}>
                                    <HomeContainerBlueEpisodeContainer />
                                </Link>
                        ))}
                    </div>
                </div>
                {/* meet the hosts */}
                <div className=''>
                    <div className='flex'>
                        <HomeRowContainerTitle rowTitle='Meet The Hosts' />
                    </div>
                    <div className='flex-col'>
                        <div className='flex space-x-[55px] md:space-x-[36px] w-full overflow-x-auto'>
                            {hosts.slice(0, 6).map((item, index) => (
                                (index < 5) ?
                                    <HomeContainerHostCard
                                        key={item.id}
                                        bannerImage={item.hostCover}
                                        bannerTitle={item.hostName}
                                        bannerType={item.host}
                                    /> :
                                    <Link to={'/meetthehosts'}>
                                        <HomeContainerBlueEpisodeContainer />
                                    </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLeftContainer