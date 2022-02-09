import React from 'react'
import { MdFacebook } from 'react-icons/md';
import { SiTwitter } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdPhoneInTalk } from 'react-icons/md';
import { BsCheck2Square } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io'
import logo from '../assets/logo.svg';
import ContentRights from './ContentRights';
import NavButtons from './NavButtons';
import SocialButton from './SocialButton';

//TODO 1 : implement mobile responsive sidebar (minimize on touch gesture)

function SidebarMenu({ isopen }) {
    return (
        <>
            <div className={`bg-#1B1730 w-203 fixed top-0 left-0 bottom-[56px] md:bottom-[90px] ${isopen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* logo */}
                <div className='pt-[25px] px-[18px]'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='flex flex-col items-center'>
                    {/* sidebar buttons */}
                    <div className='flex flex-col space-y-[16px] pt-[45px] md:pt-[53px]'>
                        {/* Home Button */}
                        <NavButtons icon={<AiFillHome />} name={'Home'} path={'/'} />
                        {/* episode button */}
                        <NavButtons icon={<FaMicrophone />} name={'Episodes'} path={'/episodes'} />
                        {/* shows button */}
                        <NavButtons icon={<AiFillPlayCircle />} name={'Shows'} path={'/shows'} />
                        {/* about button */}
                        <NavButtons icon={<AiFillInfoCircle />} name={'About'} path={'about'} />
                        {/* contact us button */}
                        <NavButtons icon={<MdPhoneInTalk />} name={'Contact Us'} path={'contactus'} />
                        {/* register button */}
                        <NavButtons icon={<BsCheck2Square />} name={'Register'} path={'/register'}/>
                        {/* send episode button */}
                        <NavButtons icon={<IoIosSend />} name={'Send Episodes'} path={'/sendepisodes'}/>
                    </div>
                    <div className='flex flex-col justify-between item-center absolute bottom-10 w-fit px-[27px] '>
                        {/* social buttons */}
                        {/* facebook button */}
                        <div className='flex justify-around items-center w-203 md:space-y-[15.84px] md:flex-col'>
                            <SocialButton icon={<MdFacebook className='text-[#BFDBFE] h-21 w-23 md:text-[#1E40AF] md:h-30 md:w-30' />} name={'Facebook'} />
                            {/* twitter button */}
                            <SocialButton icon={<SiTwitter className='text-[#BFDBFE] h-21 w-23 md:text-[#1E40AF] md:h-30 md:w-30' />} name={'Twitter'} />
                        </div>
                        {/* content-rights */}
                        <div className=''>
                            <ContentRights />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarMenu