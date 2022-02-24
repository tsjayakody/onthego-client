import React from 'react';
import DarkSocialMediaButton from '../shared/DarkSocialMediaButton';
import PropTypes from 'prop-types';
import sampleImage from '../assets/common-sample-image.png';

import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaYoutube} from 'react-icons/fa';

function HostDetailRightContainer({ hostdetialSampleBanner }) {
    return (
        <div className='flex-col space-y-[4px]'>
            <img src={hostdetialSampleBanner} alt="" className='h-[150px] w-[150px] md:h-[244px] md:w-[268px] object-fill mx-auto' />
            {/* social media button here */}
            <div className='flex justify-center'>
                <p className='text-[#666666] text-[11px]'>Follow Us On:</p>
                <div className='flex space-x-[7px] ml-[18px]'>
                    {/* social buttons here */}
                    <DarkSocialMediaButton 
                        icon={<BsTwitter/>} 
                        link={"https://www.twitter.com"} 
                    />
                    <DarkSocialMediaButton 
                        icon={<FaFacebookF/>} 
                        link={"https://www.facebook.com"}
                    />
                    <DarkSocialMediaButton
                        icon={<AiFillInstagram/>} 
                        link={"https://www.instagram.com"} 
                    />
                    <DarkSocialMediaButton 
                        icon={<FaYoutube/>} 
                        link={"https://www.youtube.com"}
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