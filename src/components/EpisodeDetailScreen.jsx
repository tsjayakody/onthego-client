import React from 'react';
import sampleImage from '../components/assets/common-sample-image.png';
import { FaPlay } from 'react-icons/fa';
import spoitifyIcon from '../components/assets/spotify-icon.svg';
import googlePodcastIcon from '../components/assets/google-podcast-icon.svg';
import applePodcastIcon from '../components/assets/apple-podcast-icon.svg';
import twitterIcon from '../components/assets/twitter-icon.svg';
import facebookIcon from '../components/assets/facebook-icon.svg';
import instagramIcon from '../components/assets/instagram-icon.svg';
import personSample from '../components/assets/person-sample.png';
import twitterDarkIcon from '../components/assets/twitter-dark-icon.svg';
import facebookDarkIcon from '../components/assets/facebook-dark-icon.svg';
import instagramDarkIcon from '../components/assets/instagram-dark-icon.svg';
import HomeContainerEpisodes from './home/HomeContainerEpisodes';
import relatedPodcasts from '../data/RelatedPodcasts';
import EpisodeDetailRelatedProductsList from './episodes/EpisodeDetailRelatedProductsList';
import EpisodeDetailUserProfileContainer from './episodes/EpisodeDetailUserProfileContainer';
import EpisodeDetailFeaturingContainer from './episodes/EpisodeDetailFeaturingContainer';

function EpisodeDetailScreen() {


  const listenNowButtonPressed = () => (console.log('Listen Now button pressed'));
  const spotifyButtonPressed = () => (console.log('Spotify button pressed'));
  const googlePodcastButtonPressed = () => (console.log('Google Podcast button pressed'));
  const applePodcastButtonPressed = () => (console.log('Apple Podcast button pressed'));
  const twitterButtonPressed = ()=>(console.log('Twitter Button Pressed'));
  const facebookButtonPressed = ()=>(console.log('Facebook Button Pressed'));
  const instagramButtonPressed = () => (console.log('Instagram Button Pressed'));

  return (
    <div className='bg-#110E1F flex-col h-full w-full overflow-y-auto overflow-x-auto pt-[117px] pl-[26px] pr:[31px] pb-[100px] md:pl-[256px] md:pt-[164px]'>
      <img src={sampleImage} alt="" className='w-[150px] h-[150px] object-fill mx-auto' />
      <p className='mx-[60px] text-center text-[9px] text-#666666 pt-[19px]'>SPORTS - BATTLE OF THE BLUES - ROYAL THOMIAN CRICKET ENCOUNTER</p>
      <p className='text-[#00D2CB] text-[20px] text-center mx-[44px] my-[7px]'>142nd “Battle of the Blues” Ends In A Watery Draw</p>
      <p className='text-#FFFFFF text-[9px] text-center'>OCTOBER 18,2021- EPISODE 70</p>
      <div className='flex space-x-[9px] pr-[31px] pt-[13px]'>
        {/* play button here */}
        <button className='h-[30px] w-[86px] bg-[#453598] flex items-center justify-center p-[3px]' onClick={listenNowButtonPressed}>
          <FaPlay className='text-[#00D2CB] h-[14px] w-[11px]' />
          <p className='text-[#00D2CB] text-[9px] text-center'>LISTEN NOW</p>
        </button>
        {/* spotify button here */}
        <button className='h-[30px] w-[86px] bg-transparent border-solid rounded-md border border-[#1B1730] flex justify-center items-center' onClick={spotifyButtonPressed}>
          <img src={spoitifyIcon} alt="" className='h-[24px] w-[24px]' />
        </button>
        {/* google podcast button here */}
        <button className='h-[30px] w-[86px] bg-transparent border-solid rounded-md border border-[#1B1730] flex justify-center items-center' onClick={googlePodcastButtonPressed}>
          <img src={googlePodcastIcon} alt="" className='h-[24px] w-[24px]' />
        </button>
        {/* apple podcast button here */}
        <button className='h-[30px] w-[86px] bg-transparent border-solid rounded-md border border-[#1B1730] flex justify-center items-center' onClick={applePodcastButtonPressed}>
          <img src={applePodcastIcon} alt="" className='h-[24px] w-[24px]' />
        </button>
      </div>
      <div className='pt-[30px] pr-[26px] flex-col relative'>
        <p className='text-#FFFFFF text-[14px text-justify]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <div className='flex pt-[4px] mb-[18px] items-center space-x-[9px] absolute right-[31px]'>
          <p className='text-#666666 text-[12px] pr-[20px] w-[50px]'>Share:</p>
          <button onClick={twitterButtonPressed}>
            <img src={twitterIcon} alt=""className='w-[18px] h-[18px] object-fill'/>
          </button>]
          <button onClick={facebookButtonPressed}>
            <img src={facebookIcon} alt=""className='w-[18px] h-[18px] object-fill'/>
          </button>
          <button onClick={instagramButtonPressed}>
            <img src={instagramIcon} alt=""className='w-[18px] h-[18px] object-fill'/>
          </button>
        </div>
      </div>
      <EpisodeDetailFeaturingContainer/>
      <EpisodeDetailUserProfileContainer 
        personSample={personSample} 
        twitterButtonPressed={twitterButtonPressed} 
        twitterDarkIcon={twitterDarkIcon} 
        facebookButtonPressed={facebookButtonPressed} 
        facebookDarkIcon={facebookDarkIcon}
        instagramButtonPressed={instagramButtonPressed}
        instagramDarkIcon={instagramDarkIcon}
      />
      <EpisodeDetailRelatedProductsList/>
    </div>
  );
}

export default EpisodeDetailScreen;