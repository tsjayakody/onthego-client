import React from 'react';
import twitterIcon from '../assets/twitter-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';

function EpisodeDetailSocialMediaButtonContainer() {
  return (
    <div className='w-full flex justify-end'>
      <div className='flex pt-[4px] md:pt-[20px] mb-[18px] items-center space-x-[9px]'>
      <p className='text-#666666 text-[12px] pr-[20px] w-[50px]'>Share:</p>
      <a href={'https://www.twitter.com'} target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="" className='w-[18px] h-[18px] object-fill' />
      </a>
      <a href={'https://www.facebook.com'} target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="" className='w-[18px] h-[18px] object-fill' />
      </a>
      <a href={'https://www.instagram.com'} target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="" className='w-[18px] h-[18px] object-fill' />
      </a>
    </div>
    </div>
  )
}

export default EpisodeDetailSocialMediaButtonContainer