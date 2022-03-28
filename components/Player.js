import React, { useRef, useState, useEffect } from 'react'
import styles from './Player.module.css'
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaForward } from 'react-icons/fa'
import { FaBackward } from 'react-icons/fa'
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import {useRecoilValue} from 'recoil'
import {playerSelector} from '../atoms/playerAtom'
function Player() {

  const playerValue = useRecoilValue(playerSelector)
  console.log({playerValue}); 
  //* state 
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //* ref
  const audioPlayer = useRef();   // ref to our audio compoenent
  const progressBar = useRef();  // ref to progress bar component
  const animationRef = useRef(); // ref to animation


  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue)
    if (prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 10);
    changeRange();
  }

  const skipThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 10);
    changeRange();
  }

  return (
    <div className='bg-[#282246] text-white h-[56px] lg:h-[89px] flex items-cente flex-shrink-0'>
      <div className={`${styles.audioPlayer} flex w-full items-center mx-[17px] lg:mx-[90px]`}>
        {/* audio player */}
        <audio
          ref={audioPlayer}
          src={playerValue.media_url}>
        </audio>

        <img src={playerValue.episode_image} alt="" className='h-[38px] lg:h-[72px] object-fill lg:rounded-full' />

        <div className='flex-col items-center w-full space-y-[8px] mx-[17px] lg:mx-[50px]'>

          {/* progress bar/ slider */}
          <div>
            <input className={styles.progressBar} type="range" name="" id="" defaultValue="0" ref={progressBar} onChange={changeRange} />
          </div>

          <div className='flex justify-between '>
            {/* current time */}
            <div className='text-[10px] text-white'>{calculateTime(currentTime)}</div>

            {/* total duration */}
            <div className='text-[10px] text-white'>{(duration && !isNaN(duration)) ? calculateTime(duration): "00:00"}</div>
          </div>
        </div>

        <div className='space-x-[36px] flex items-center'>
          <button className='hover:text-[#00D2CB] hidden lg:inline' onClick={backThirty}><FaBackward /></button>
          <button className='hover:text-[#00D2CB]' onClick={togglePlayPause} disabled={!playerValue} >{isPlaying ? <FaPlay /> : <FaPause />}</button>
          <button className='hover:text-[#00D2CB] hidden lg:inline' onClick={skipThirty}><FaForward /></button>
        </div>
      </div>
    </div>
  )
}

export default Player