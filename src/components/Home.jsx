import React from 'react';

//! assets >>>temp<<<
import HomeRowContainerTitle from './home/HomeRowContainerTitle';
import HomeContainerEpisodes from './home/HomeContainerEpisodes';
import HomeContainerHostCard from './home/HomeContainerHostCard';
import PopularEpisode from './home/PopularEpisode';
import commonImage from './assets/common-sample-image.png';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';
import latestepisodes from '../data/LatestEpisodes';
import featuredepisodes from '../data/FeaturedEpisodes';
import hosts from '../data/Hosts';

function Home() {
  return (
    <BackgroundContainer>
        {/* top bar */}
      <Topbar><p className='text-#FFFFFF text-[10px]'>This is search bar container</p></Topbar>
      {/* main content */}
      <div className='flex relative'>
                {/* music shows */}
                {/* shows carousel */}
                <div className='basis-3/4 flex flex-col pt-[32px] pl-[26px] md:pt-[59px] md:pl-[59px]'>
                    {/* latest episodes */}
                    <div className='pb-[19px] md:pb-[30px]'>
                        <HomeRowContainerTitle rowTitle='Latest Episodes' />
                        {/* dynmic list here */}
                        <div className='flex space-x-[16px] md:space-x-[31px] w-screen overflow-x-auto'>
                            {latestepisodes.map((item)=>(
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
                        <div className='flex space-x-[16px] md:space-x-[31px] w-screen overflow-x-auto'>
                            {featuredepisodes.map((item)=>(
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
                            {hosts.map((item)=>(
                                <HomeContainerHostCard key={item.id} bannerImage={item.hostCover} bannerTitle={item.hostName} bannerType={item.hostType} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='basis-1/4 flex-col md:inline hidden sm:hidden absolute top-[59px] right-[22px] bottom-[150px]'>
                    {/* popular episodes */}
                    <div className=''>
                        <HomeRowContainerTitle rowTitle='Popular Episodes' />
                        <div className='flex flex-col space-y-[25px]'>
                            <PopularEpisode episodeImage={commonImage} episodeTitle='popular One' episodeCategory='Travel' episodeDuration='03.00' />
                            <PopularEpisode episodeImage={commonImage} episodeTitle='popular One' episodeCategory='Travel' episodeDuration='03.00' />
                        </div>
                        {/* view all sample button */}
                        <div className='pt-[42px]'>
                        <button className='bg-#282246 h-[1.563rem] w-[16.25rem] ' >
                            <p className='text-#FFFFFF text-[10px]'>View All</p>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
    </BackgroundContainer>
  );
}

export default Home;
