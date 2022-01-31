import React from 'react';
import {MdArrowForwardIos} from 'react-icons/md';

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
                <div className='basis-3/4 flex flex-col pt-[32px] pl-[26px] md:pt-[59px] md:pl-[59px]'>
                    {/* latest episodes */}
                    <div className='pb-[19px] md:pb-[30px]'>
                        <HomeRowContainerTitle rowTitle='Latest Episodes' />
                        {/* dynmic list here */}
                        <div className='flex space-x-[16px] md:space-x-[31px]'>
                            <HomeContainerEpisodes bannerImage={episodeBannerSample} bannerTitle='142nd ‘Battle of the Blues” Ends In A Watery Draw' bannerCreator='The Moring Sports' />
                            <HomeContainerEpisodes bannerImage={episodeBannerSample} bannerTitle='142nd ‘Battle of the Blues” Ends In A Watery Draw' bannerCreator='The Moring Sports' />
                        </div>
                    </div>
                    {/* featured episodes */}
                    <div className='pb-[27px] md:pb-[30px]'>
                        <HomeRowContainerTitle rowTitle='Featured Episodes' />
                        {/* dynmic list here */}
                        <div className='flex space-x-[16px] md:space-x-[31px]'>
                            <HomeContainerEpisodes bannerImage={episodeBannerSample2} bannerTitle='142nd ‘Battle of the Blues” Ends In A Watery Draw' bannerCreator='The Moring Sports' />
                            <HomeContainerEpisodes bannerImage={episodeBannerSample2} bannerTitle='142nd ‘Battle of the Blues” Ends In A Watery Draw' bannerCreator='The Moring Sports' />
                        </div>
                    </div>
                    {/* meet the hosts */}
                    <div className=''>
                        <div className='flex justify-between'>
                            <HomeRowContainerTitle rowTitle='Meet The Hosts' />
                                <div className='flex items-center text-#666666 text-[11px] pt-[7px]'>
                                    <p>Browse All{'>'}{'>'}</p>
                                </div>
                            </div>
                        <div className='flex space-x-[55px]'>
                            <HomeContainerHostCard bannerImage={hostBannerSample} bannerTitle='Travel With Wife' bannerType='CONTENT CREATOR' />
                            <HomeContainerHostCard bannerImage={hostBannerSample} bannerTitle='Travel With Wife' bannerType='CONTENT CREATOR' />
                        </div>
                    </div>
                </div>
                <div className='basis-1/4 flex flex-col items-end pt-[32px] md:pt-[59px] md:pr-[22px] relative'>
                    {/* popular episodes */}
                    <div>
                        <HomeRowContainerTitle rowTitle='Popular Episodes' />
                        <div className='flex flex-col space-y-[25px]'>
                            <PopularEpisode episodeImage={popularEpisodeBannerSample} episodeTitle='popular One' episodeCategory='Travel' episodeDuration='03.00' />
                            <PopularEpisode episodeImage={popularEpisodeBannerSample} episodeTitle='popular One' episodeCategory='Travel' episodeDuration='03.00' />
                        </div>
                        {/* view all sample button */}
                        <div className='pt-[42px] absolute bottom-[44px] right-[22px]'>
                        <button className='bg-#282246 h-[1.563rem] w-[16.25rem] ' >
                            <p className='text-#FFFFFF text-[10px]'>View All</p>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Home;
