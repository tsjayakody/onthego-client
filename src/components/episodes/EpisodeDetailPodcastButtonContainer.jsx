import React from 'react'
import { FaPlay } from 'react-icons/fa';
import spoitifyIcon from '../assets/spotify-icon.svg';
import googlePodcastIcon from '../assets/google-podcast-icon.svg';
import applePodcastIcon from '../assets/apple-podcast-icon.svg';
import useRipple from "use-ripple-hook";

//TODO: need to pass podcast links as props here 

function EpisodeDetailPodcastButtonContainer() {

    const listenNowButtonPressed = () => (console.log('Listen Now button pressed'));
    const spotifyButtonPressed = () => (console.log('Spotify button pressed'));
    const googlePodcastButtonPressed = () => (console.log('Google Podcast button pressed'));
    const applePodcastButtonPressed = () => (console.log('Apple Podcast button pressed'));

    // ripple buton declaration
    const [ripple1, event1] = useRipple();
    const [ripple2, event2] = useRipple();
    const [ripple3, event3] = useRipple();
    const [ripple4, event4] = useRipple();

    return (
        <div className='flex space-x-[9px] lg:space-x-[13px] pr-[31px] pt-[13px]'>
            {/* play button here */}
            <button ref={ripple1} onMouseDown={event1} className='h-[30px] w-[86px] md:w-[140px] md:h-[40px] bg-[#453598] flex items-center justify-center p-[3px]' onClick={listenNowButtonPressed}>
                <FaPlay className='text-[#00D2CB] h-[14px] w-[11px]' />
                <p className='text-[#00D2CB] text-[9px] text-center ml-[5px] md:ml-[10px]'>LISTEN NOW</p>
            </button>
            {/* spotify button here */}
            <button ref={ripple2} onMouseDown={event2} className='h-[30px] w-[86px] md:w-[140px] md:h-[40px] bg-transparent hover:bg-[#1B1730] border-solid rounded-md border border-[#1B1730] flex justify-center items-center' onClick={spotifyButtonPressed}>
                <img src={spoitifyIcon} alt="" className='h-[24px] w-[24px]' />
            </button>
            {/* google podcast button here */}
            <button ref={ripple3} onMouseDown={event3} className='h-[30px] w-[86px] md:w-[140px] md:h-[40px] bg-transparent hover:bg-[#1B1730] border-solid rounded-md border border-[#1B1730] flex justify-center items-center' onClick={googlePodcastButtonPressed}>
                <img src={googlePodcastIcon} alt="" className='h-[24px] w-[24px]' />
            </button>
            {/* apple podcast button here */}
            <button ref={ripple4} onMouseDown={event4} className='h-[30px] w-[86px] md:w-[140px] md:h-[40px] bg-transparent hover:bg-[#1B1730] border-solid rounded-md border border-[#1B1730] flex justify-center items-center' onClick={applePodcastButtonPressed}>
                <img src={applePodcastIcon} alt="" className='h-[24px] w-[24px]' />
            </button>
        </div>
    )
}

export default EpisodeDetailPodcastButtonContainer