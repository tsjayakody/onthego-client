import React from 'react';
import DarkSocialMediaButton from '../shared/DarkSocialMediaButton';
import PropTypes from 'prop-types';
import sampleImage from '../assets/common-sample-image.png';

function HostDetailRightContainer({
    hostdetialSampleBanner, 
    twitterDarkIcon, 
    facebookDarkIcon, 
    instagramDarkIcon, 
    youtubeDarkIcon
    }) {
    return (
        <div className='flex-col space-y-[4px]'>
            <img src={hostdetialSampleBanner} alt="" className='h-[150px] w-[150px] md:h-[244px] md:w-[268px] object-fill mx-auto' />
            {/* social media button here */}
            <div className='flex justify-center'>
                <p className='text-[#666666] text-[11px]'>Follow Us On:</p>
                <div className='flex space-x-[7px] ml-[18px]'>
                    {/* social buttons here */}
                    <DarkSocialMediaButton 
                        icon={twitterDarkIcon} 
                        onclick={() => (console.log("Twitter Button Pressed"))} 
                    />
                    <DarkSocialMediaButton 
                        icon={facebookDarkIcon} 
                        onclick={() => (console.log("Twitter Button Pressed"))}
                    />
                    <DarkSocialMediaButton 
                        icon={instagramDarkIcon} 
                        onclick={() => (console.log("Twitter Button Pressed"))} 
                    />
                    <DarkSocialMediaButton 
                        icon={youtubeDarkIcon} 
                        onclick={() => (console.log("Twitter Button Pressed"))}
                    />
                </div>
            </div>
        </div>
    )
}

HostDetailRightContainer.propTypes = {
    hostdetialSampleBanner: PropTypes.string,
    twitterDarkIcon: PropTypes.string,
    facebookDarkIcon: PropTypes.string,
    instagramDarkIcon: PropTypes.string,
    youtubeDarkIcon: PropTypes.string,
}

export default HostDetailRightContainer