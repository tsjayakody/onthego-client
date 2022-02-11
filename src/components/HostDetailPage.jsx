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

function HostDetailPage() {

    const hostName = "Travel With Wife";
    const hostType = "TRAVEL CONTENT CREATOR";
    const hostDetails = "A podcast for people who love to Travel, Hosts by Sri Lankan Travel Vloggers Kasun & Chamari. This podcast is based on our travel experiences and we will be talking on Budget travel strategies, Travel tips to see the world free of charge, Life of a digital nomad, Unconventional travel based lifestyle, fun travel jobs, and how to plan an epic adventure.";

    return (
        <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            {/* main container */}
            <div className='flex-col mt-[126px] ml-[59px] space-y-[79px] md:space-y-[136px]'>
                {/* top container */}
                <div className="flex space-x-[210px]">
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
                <div className='md:ml-[150px] md:w-[750px] grid grid-cols-2 gap-[29px] md:grid md:grid-cols-5 md:gap-[43px] mr-[44px] md:mr-[0px]'>
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
    )
}

export default HostDetailPage