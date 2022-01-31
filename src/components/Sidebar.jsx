import React from 'react';
import {MdFacebook} from 'react-icons/md';
import {SiTwitter} from 'react-icons/si';

import logo from './assets/logo.svg';
import ContentRights from './sidebar/ContentRights';
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
            
            {/* episode button */}
            
            {/* shows button */}
            
            {/* about button */}
            
            {/* contact us button */}
            
            {/* register button */}
            
            {/* send episode button */}
            
        </div>
        <div className='flex flex-col justify-between item-center absolute bottom-10 w-fit px-[27px] '>
            {/* social buttons */}
                {/* facebook button */}
            <div className='flex justify-around items-center w-203 md:space-y-[15.84px] md:flex-col'>
            <SocialButton icon={<MdFacebook className='text-[#BFDBFE] h-21 w-23 md:text-[#1E40AF] md:h-30 md:w-30 pl-[13px]'/>} name={'Facebook'}/>
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
