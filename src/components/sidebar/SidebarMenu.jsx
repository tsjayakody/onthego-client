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
import PropTypes from 'prop-types'

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
                        {linksArray.map(({ icon, name, path, isActive }) => (
                            <NavButtons
                                key={name}
                                icon={icon}
                                name={name}
                                path={path}
                                isActive={isActive}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col justify-between item-center absolute bottom-10 w-fit px-[27px] '>
                        {/* social buttons */}
                        {/* facebook button */}
                        <div className='flex justify-around items-center w-203 md:space-y-[15.84px] md:flex-col'>
                            <SocialButton
                                icon={<MdFacebook className='text-[#BFDBFE] h-21 w-23 md:text-[#1E40AF] md:h-30 md:w-30' />}
                                name={'Facebook'}
                                link={'https://www.facebook.com'}
                            />
                            {/* twitter button */}
                            <SocialButton
                                icon={<SiTwitter className='text-[#BFDBFE] h-21 w-23 md:text-[#1E40AF] md:h-30 md:w-30' />}
                                name={'Twitter'}
                                link={'https://www.twitter.com'}
                            />
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

const linksArray = [
    {
        icon: < AiFillHome />,
        name: "Home",
        path: "/",
        isActive: true,
    },
    {
        icon: < FaMicrophone />,
        name: "Episodes",
        path: "/episodes",
        isActive: true,
    },
    {
        icon: < AiFillPlayCircle />,
        name: "Shows",
        path: "/shows",
        isActive: true,
    },
    {
        icon: < AiFillInfoCircle />,
        name: "About",
        path: "/about",
        isActive: true,
    },
    {
        icon: < MdPhoneInTalk />,
        name: "Contact Us",
        path: "/contactus",
        isActive: true,
    },
    {
        icon: < BsCheck2Square />,
        name: "Register",
        path: "/register",
        isActive: true,
    },
    {
        icon: < IoIosSend />,
        name: "Send Episodes",
        path: "/sendepisodes",
        isActive: true,
    },
];

SidebarMenu.defaultProps = {
    isopen: true,
}

SidebarMenu.propTypes = {
    isopen: PropTypes.bool,
}

export default SidebarMenu