import React from 'react';
import DarkSocialMediaButton from './DarkSocialMediaButton';

function FollowUsContainer({twitterIcon, facebookIcon, instagramIcon, youtubeIcon, twitterOnClick, facebookOnClick, instagramOnclick, youtubeOnClick}) {
    return (
        <div className='flex'>
            <p className='text-[#666666] text-[11px]'>Follow Us On:</p>
            <div className='flex space-x-[7px] ml-[18px]'>
                {/* social buttons here */}
                <DarkSocialMediaButton icon={twitterIcon} onclick={twitterOnClick} />
                <DarkSocialMediaButton icon={facebookIcon} onclick={facebookOnClick} />
                <DarkSocialMediaButton icon={instagramIcon} onclick={instagramOnclick} />
                <DarkSocialMediaButton icon={youtubeIcon} onclick={youtubeOnClick} />
            </div>
        </div>
    )
}

export default FollowUsContainer