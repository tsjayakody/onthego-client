import React from 'react';
import twitterIcon from '../assets/twitter-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';

function EpisodeDetailSocialMediaButtonContainer() {


  const twitterButtonPressed = () => (console.log('Twitter Button Pressed'));
  const facebookButtonPressed = () => (console.log('Facebook Button Pressed'));
  const instagramButtonPressed = () => (console.log('Instagram Button Pressed'));

  return (
    <div className='flex pt-[4px] md:pt-[20px] mb-[18px] items-center space-x-[9px] absolute right-[0px]'>
      <p className='text-#666666 text-[12px] pr-[20px] w-[50px]'>Share:</p>
      <button onClick={twitterButtonPressed}>
        <img src={twitterIcon} alt="" className='w-[18px] h-[18px] object-fill' />
      </button>]
      <button onClick={facebookButtonPressed}>
        <img src={facebookIcon} alt="" className='w-[18px] h-[18px] object-fill' />
      </button>
      <button onClick={instagramButtonPressed}>
        <img src={instagramIcon} alt="" className='w-[18px] h-[18px] object-fill' />
      </button>
    </div>
  )
}

export default EpisodeDetailSocialMediaButtonContainer