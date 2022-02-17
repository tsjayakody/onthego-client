import React from 'react'
import meetTheHostSample from '../assets/meet-the-host-sample.png';
import DarkSocialMediaButton from '../shared/DarkSocialMediaButton';
import twitterDarkIcon from '../assets/twitter-dark-icon.svg';
import facebookDarkIcon from '../assets/facebook-dark-icon.svg';
import instagramDarkIcon from '../assets/instagram-dark-icon.svg';
import youtubeDarkIcon from '../assets/youtube-dark-icon.svg';
import leftrectangle from '../assets/rectangle-left.svg';
import {Link} from 'react-router-dom';

function MeetTheHostCardLeft() {
    return (
        <Link to={'/hostdetail'}>
            {/* left card */}
            <div className='h-[174px] w-[371px] md:h-[244px] md:w-[550px] flex items-center bg-[#282246] pr-[29px] md:pr-[0px]'>
                {/* image here */}
                <img src={meetTheHostSample} alt="" className='w-[186px] h-[174px] md:w-[275px] md:h-[244px] object-fill' />
                <div className='flex-col items-center justify-center w-max h-max pl-[32px] relative'>
                    <img src={leftrectangle} alt="" className='w-[50px] h-[35px] absolute left-[-35px] top-[45px]' />
                    <p className='text-[#00D2CB] text-[15px] md:text-[20px] mb-[19px]'>Marlon Dale Ferreira</p>
                    <p className='text-[#FFFFFF] text-[10px] md:text-[12px] max-w-[208px] mb-[27px] text-center'>JOURNALIST - PODCASTER (SPORTS/NEWS)</p>
                    <div className='flex items-center'>
                        <p className='text-[#666666] text-[10px] md:text-[11px]'>Follow Us On:</p>
                        <div className='flex space-x-[7px] ml-[18px]'>
                            {/* social buttons here */}
                            <DarkSocialMediaButton icon={twitterDarkIcon} link={'https://www.twitter.com'} />
                            <DarkSocialMediaButton icon={facebookDarkIcon} link={'https://www.facebook.com'}  />
                            <DarkSocialMediaButton icon={instagramDarkIcon} link={'https://www.instagram.com'}  />
                            <DarkSocialMediaButton icon={youtubeDarkIcon} link={'https://www.youtube.com'}  />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MeetTheHostCardLeft