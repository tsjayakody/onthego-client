import React from 'react'
import meetTheHostSample from '../assets/meet-the-host-sample.png';
import DarkSocialMediaButton from '../shared/DarkSocialMediaButton';
import twitterDarkIcon from '../assets/twitter-dark-icon.svg';
import facebookDarkIcon from '../assets/facebook-dark-icon.svg';
import instagramDarkIcon from '../assets/instagram-dark-icon.svg';
import youtubeDarkIcon from '../assets/youtube-dark-icon.svg';
import leftrectangle from '../assets/rectangle-left.svg';

function MeetTheHostCardLeft() {
    return (
        <>
            {/* left card */}
            <div className='h-[244px] w-[550px] flex items-center bg-[#282246]'>
                {/* image here */}
                <img src={meetTheHostSample} alt="" className='w-[275px] h-[244px] object-fill' />
                <div className='flex-col items-center justify-center w-max h-max pl-[32px] relative'>
                    <img src={leftrectangle} alt="" className='w-[50px] h-[35px] absolute left-[-35px] top-[45px]' />
                    <p className='text-[#00D2CB] text-[20px] mb-[19px]'>Marlon Dale Ferreira</p>
                    <p className='text-[#FFFFFF] text-[12px] max-w-[208px] mb-[27px] text-center'>JOURNALIST - PODCASTER (SPORTS/NEWS)</p>
                    <div className='flex'>
                        <p className='text-[#666666] text-[11px]'>Follow Us On:</p>
                        <div className='flex space-x-[7px] ml-[18px]'>
                            {/* social buttons here */}
                            <DarkSocialMediaButton icon={twitterDarkIcon} onclick={() => (console.log("Twitter Button Pressed"))} />
                            <DarkSocialMediaButton icon={facebookDarkIcon} onclick={() => (console.log("Twitter Button Pressed"))} />
                            <DarkSocialMediaButton icon={instagramDarkIcon} onclick={() => (console.log("Twitter Button Pressed"))} />
                            <DarkSocialMediaButton icon={youtubeDarkIcon} onclick={() => (console.log("Twitter Button Pressed"))} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetTheHostCardLeft