import React from 'react';

//! assets >>>temp<<<
import episodeBannerSample from './assets/episodes-banner-sample.svg';
import episodeBannerSample2 from './assets/episode-banner-sample-2.svg';
import hostBannerSample from './assets/host-banner-sample.svg';
import popularEpisodeBannerSample from './assets/popular-episode-banner-sample.svg'; 
import HomeRowContainerTitle from './home/HomeRowContainerTitle';
import HomeContainerEpisodes from './home/HomeContainerEpisodes';
import HomeContainerHostCard from './home/HomeContainerHostCard';
import PopularEpisode from './home/PopularEpisode';

function Home() {
  return (
    <div className='bg-#110E1F flex-grow'>
      {/* top bar */}
      <div className='bg-transparent'></div>
      {/* main content */}
      <div className='flex'>
                {/* music shows */}
                {/* shows carousel */}
                <div className='basis-3/4 flex flex-col p-[59px]'>
                    {/* latest episodes */}
                    <div className='pb-6'>
                        <HomeRowContainerTitle rowTitle='Latest Episodes' />
                        {/* dynmic list here */}
                        <div className='flex'>
                            <HomeContainerEpisodes bannerImage={episodeBannerSample} bannerTitle='142nd ‘Battle of the Blues” Ends In A Watery Draw' bannerCreator='The Moring Sports' />
                            <HomeContainerEpisodes bannerImage={episodeBannerSample} bannerTitle='142nd ‘Battle of the Blues” Ends In A Watery Draw' bannerCreator='The Moring Sports' />
                        </div>
                    </div>
                    {/* featured episodes */}
                    <div className='pb-6'>
                        <HomeRowContainerTitle rowTitle='Featured Episodes' />
                        {/* dynmic list here */}
                        <div className='flex'>
                            <HomeContainerEpisodes bannerImage={episodeBannerSample2} bannerTitle='142nd ‘Battle of the Blues” Ends In A Watery Draw' bannerCreator='The Moring Sports' />
                            <HomeContainerEpisodes bannerImage={episodeBannerSample2} bannerTitle='142nd ‘Battle of the Blues” Ends In A Watery Draw' bannerCreator='The Moring Sports' />
                        </div>
                    </div>
                    {/* meet the hosts */}
                    <div className='pb-6'>
                        <HomeRowContainerTitle rowTitle='Meet The Hosts' />
                        <div className='flex'>
                            <HomeContainerHostCard bannerImage={hostBannerSample} bannerTitle='Travel With Wife' bannerType='CONTENT CREATOR' />
                            <HomeContainerHostCard bannerImage={hostBannerSample} bannerTitle='Travel With Wife' bannerType='CONTENT CREATOR' />
                        </div>
                    </div>
                </div>
                <div className='basis-1/4 flex flex-col'>
                    {/* popular episodes */}
                    <div>
                        <HomeRowContainerTitle rowTitle='Popular Episodes' />
                        <div className='flex flex-col'>
                            <PopularEpisode episodeImage={popularEpisodeBannerSample} episodeTitle='popular One' episodeCategory='Travel' episodeDuration='03.00' />
                            <PopularEpisode episodeImage={popularEpisodeBannerSample} episodeTitle='popular One' episodeCategory='Travel' episodeDuration='03.00' />
                        </div>
                        {/* view all sample button */}
                        <button className='bg-#282246 h-[1.563rem] w-[16.25rem]' >
                            <p className='text-#FFFFFF text-[10px]'>View All</p>
                        </button>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Home;
