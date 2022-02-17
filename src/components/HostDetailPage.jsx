import React from 'react'
import hostDetailList from '../data/HostsDetailList';
import hostdetialSampleBanner from './assets/host-detail-sample-banner.png';
import ShowsDetailContainer from './shows/ShowsDetailContainer';
import twitterDarkIcon from '../components/assets/twitter-dark-icon.svg';
import facebookDarkIcon from '../components/assets/facebook-dark-icon.svg';
import instagramDarkIcon from '../components/assets/instagram-dark-icon.svg';
import DarkSocialMediaButton from '../components/shared/DarkSocialMediaButton';
import youtubeDarkIcon from '../components/assets/youtube-dark-icon.svg';
import HostDetailLeftContainer from './hosts/HostDetailLeftContainer';
import HostDetailRightContainer from './hosts/HostDetailRightContainer';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';

function HostDetailPage() {

    const hostName = "Travel With Wife";
    const hostType = "TRAVEL CONTENT CREATOR";
    const hostDetails = "A podcast for people who love to Travel, Hosts by Sri Lankan Travel Vloggers Kasun & Chamari. This podcast is based on our travel experiences and we will be talking on Budget travel strategies, Travel tips to see the world free of charge, Life of a digital nomad, Unconventional travel based lifestyle, fun travel jobs, and how to plan an epic adventure.";

    return (
        <BackgroundContainer>
            <Topbar />
            <div className='md:ml-[61px] ml-[26px] mr-[44px] md:mr-[0px] mt-[100px]'>
                {/* main container */}
                <div className='flex-col space-y-[79px] md:space-y-[136px]'>
                    {/* top container */}
                    <div className="flex">
                        <div className='inline-table md:hidden '>
                            {/* shows banner image */}
                            <HostDetailRightContainer
                                hostdetialSampleBanner={hostdetialSampleBanner}
                                twitterDarkIcon={twitterDarkIcon}
                                facebookDarkIcon={facebookDarkIcon}
                                instagramDarkIcon={instagramDarkIcon}
                                youtubeDarkIcon={youtubeDarkIcon}
                            />
                            {/* text div col */}
                            <HostDetailLeftContainer
                                hostName={hostName}
                                hostType={hostType}
                                hostDetails={hostDetails}
                            />
                        </div>
                        <div className='hidden md:inline-flex space-x-[206px]'>
                            {/* text div col */}
                            <HostDetailLeftContainer
                                hostName={hostName}
                                hostType={hostType}
                                hostDetails={hostDetails}
                            />
                            {/* shows banner image */}
                            <HostDetailRightContainer
                                hostdetialSampleBanner={hostdetialSampleBanner}
                                twitterDarkIcon={twitterDarkIcon}
                                facebookDarkIcon={facebookDarkIcon}
                                instagramDarkIcon={instagramDarkIcon}
                                youtubeDarkIcon={youtubeDarkIcon}
                            />
                        </div>
                    </div>
                    {/* bottom shows grid */}
                    <div className='md:w-[750px] grid grid-cols-2 gap-[29px] md:ml-[59px] md:grid md:grid-cols-5 md:gap-[43px]'>
                        {hostDetailList.map((item) => (
                            <ShowsDetailContainer
                                key={item.id}
                                showsBanner={item.showCover}
                                showsTitle={item.showsTitle}
                                showsAuthor={item.showAuthor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundContainer>
    )
}

export default HostDetailPage