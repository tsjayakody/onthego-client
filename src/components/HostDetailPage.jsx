import React from 'react'
import hostDetailList from '../data/HostsDetailList';
import hostdetialSampleBanner from './assets/host-detail-sample-banner.png';
import ShowsDetailContainer from './shows/ShowsDetailContainer';
import twitterDarkIcon from '../components/assets/twitter-dark-icon.svg';
import facebookDarkIcon from '../components/assets/facebook-dark-icon.svg';
import instagramDarkIcon from '../components/assets/instagram-dark-icon.svg';
import DarkSocialMediaButton from '../components/shared/DarkSocialMediaButton';
import youtubeDarkIcon from '../components/assets/youtube-dark-icon.svg';

function HostDetailPage() {

    const hostName = "Travel With Wife";
    const hostType = "TRAVEL CONTENT CREATOR";
    const hostDetails = "A podcast for people who love to Travel, Hosts by Sri Lankan Travel Vloggers Kasun & Chamari. This podcast is based on our travel experiences and we will be talking on Budget travel strategies, Travel tips to see the world free of charge, Life of a digital nomad, Unconventional travel based lifestyle, fun travel jobs, and how to plan an epic adventure.";

    return (
        <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            {/* main container */}
            <div className='flex-col mt-[126px] ml-[59px] space-y-[136px]'>
                {/* top container */}
                <div className="flex space-x-[210px]">
                    {/* text div col */}
                    <div className="flex-col max-w-[453px] justify-start space-y-[10px]">
                        <h1 className='text-#FFFFFF text-[26px]'>{hostName}</h1>
                        <p className='text-[#FFFFFF] text-[12px]'>{hostType}</p>
                        <p className='text-[#666666] text-[15px]'>{hostDetails}</p>
                    </div>
                    {/* shows banner image */}
                    <div className='flex-col space-y-[4px]'>
                        <img src={hostdetialSampleBanner} alt="" className='h-[244px] w-[268px] object-fill' />
                        {/* social media button here */}
                        <div className='flex'>
                            <p className='text-[#666666] text-[11px]'>Follow Us On:</p>
                            <div className='flex space-x-[7px] ml-[18px]'>
                                {/* social buttons here */}
                                <DarkSocialMediaButton icon={twitterDarkIcon} onclick={()=>(console.log("Twitter Button Pressed"))}/>
                                <DarkSocialMediaButton icon={facebookDarkIcon} onclick={()=>(console.log("Twitter Button Pressed"))}/>
                                <DarkSocialMediaButton icon={instagramDarkIcon} onclick={()=>(console.log("Twitter Button Pressed"))}/>
                                <DarkSocialMediaButton icon={youtubeDarkIcon} onclick={()=>(console.log("Twitter Button Pressed"))}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom shows grid */}
                <div className='ml-[150px] w-[750px] grid grid-cols-5 gap-[43px]'>
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