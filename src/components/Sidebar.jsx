import React from 'react';
import {MdFacebook} from 'react-icons/md';
import {SiTwitter} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';
import {FaMicrophone} from 'react-icons/fa';
import {AiFillPlayCircle} from 'react-icons/ai';
import {AiFillInfoCircle} from 'react-icons/ai';
import {MdPhoneInTalk} from 'react-icons/md';
import {BsCheck2Square} from 'react-icons/bs';
import {IoIosSend} from 'react-icons/io'

import logo from './assets/logo.svg';
import ContentRights from './sidebar/ContentRights';
import NavButtons from './sidebar/NavButtons';
import SocialButton from './sidebar/SocialButton';

function Sidebar() {
  return(
    <div className='bg-#1B1730 w-48 relative'>
    {/* logo */}
    <div className='pt-[25px] px-[18px]'>
        <img src={logo} alt="Logo" />
    </div>
    <div className='flex flex-col items-center'>
        {/* sidebar buttons */}
        <div className='pt-[53px]'>
            {/* Home Button */}
            <NavButtons icon={<AiFillHome/>} name={'Home'} path={'#'}/>
            {/* episode button */}
            <NavButtons icon={<FaMicrophone/>} name={'Episodes'} path={'#'}/>
            {/* shows button */}
            <NavButtons icon={<AiFillPlayCircle/>} name={'Shows'} path={'#'}/>
            {/* about button */}
            <NavButtons icon={<AiFillInfoCircle/>} name={'About'} path={'#'}/>
            {/* contact us button */}
            <NavButtons icon={<MdPhoneInTalk/>} name={'Contact Us'} path={'#'}/>
            {/* register button */}
            <NavButtons icon={<BsCheck2Square/>} name={'Register'} path={'#'}/>
            {/* send episode button */}
            <NavButtons icon={<IoIosSend/>} name={'Send Episodes'} path={'#'}/>
        </div>
        <div className='flex flex-col justify-between item-center absolute bottom-10 w-fit px-[27px] '>
            {/* social buttons */}
                {/* facebook button */}
            <div className='flex justify-around items-center w-203 md:space-y-[15.84px] md:flex-col'>
            <SocialButton icon={<MdFacebook className='text-[#BFDBFE] h-21 w-23 md:text-[#1E40AF] md:h-30 md:w-30'/>} name={'Facebook'}/>
            {/* twitter button */}
            <SocialButton icon={<SiTwitter className='text-[#BFDBFE] h-21 w-23 md:text-[#1E40AF] md:h-30 md:w-30'/>} name={'Twitter'}/>
            </div>
            {/* content-rights */}
            <div className=''>
                <ContentRights/>
            </div>
        </div>
    </div>
</div>
  );
}

export default Sidebar;
