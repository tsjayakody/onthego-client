import React from 'react'
import {FaPlay} from 'react-icons/fa';
import musicPlayButtonCircle from '../assets/music-play-button-circle.svg';

function EpisodeListItemRightcontainerButton({onClick}) {
    return (
        <button onClick={onClick} className='md:pr-[27px]'>
            <div className='hidden md:inline-flex rounded-full bg-[#6654C5] md:bg-[#453598] hover:bg-[#282246]  h-[40px] w-[40px] md:w-[140px] md:h-[40px] items-center justify-around'>
                <FaPlay className='text-[#00D2CB] hover:text-[#00D2CB] h-[20px] w-[18px] md:h-[14px] md:w-auto ' />
                <p className='text-[10px] text-[#00D2CB] hover:text-[#00D2CB] uppercase '>listen now</p>
            </div>
            <div className='inline md:hidden relative z-0 h-[40px] w-[40px] mr-[50px]'>
                <img src={musicPlayButtonCircle} alt="" className='h-[40px] w-[40px] object-contain z-0' />
                <FaPlay className='text-[#00D2CB] w-[18px] h-[20px] absolute top-[26px] left-[-12px]' />
            </div>
        </button>
    )
}

export default EpisodeListItemRightcontainerButton