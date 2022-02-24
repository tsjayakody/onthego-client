import React from 'react'
import meetTheHostSample from '../assets/meet-the-host-sample.png';
import DarkSocialMediaButton from '../shared/DarkSocialMediaButton';
import leftrectangle from '../assets/rectangle-left.svg';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaYoutube} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function MeetTheHostCardLeft() {
    return (
            <div className='h-[174px] w-full md:h-[244px] md:w-[550px] flex items-center bg-[#282246] pr-[29px] md:pr-[0px]'>
                {/* image here */}
                <Link to={'/hostdetail'}>
                    <img src={meetTheHostSample} alt="" className='w-[186px] h-[174px] md:w-[275px] md:h-[244px] object-fill' />
                </Link>
                <div className='flex-col items-center justify-center w-max h-max pl-[32px] relative'>
                    <img src={leftrectangle} alt="" className='w-[50px] h-[35px] absolute left-[-35px] top-[45px]' />
                    <p className='text-[#00D2CB] text-[15px] md:text-[20px] mb-[19px]'>Marlon Dale Ferreira</p>
                    <p className='text-[#FFFFFF] text-[10px] md:text-[12px] max-w-[208px] mb-[27px] text-center'>JOURNALIST - PODCASTER (SPORTS/NEWS)</p>
                    <div className='flex items-center'>
                        <p className='text-[#666666] text-[10px] md:text-[11px]'>Follow Us On:</p>
                        <div className='flex space-x-[7px] ml-[18px] items-center'>
                            {/* social buttons here */}
                            <DarkSocialMediaButton icon={<BsTwitter/>} link={'https://www.twitter.com'} />
                            <DarkSocialMediaButton icon={<FaFacebookF/>} link={'https://www.facebook.com'}  />
                            <DarkSocialMediaButton icon={<AiFillInstagram/>} link={'https://www.instagram.com'}  />
                            <DarkSocialMediaButton icon={<FaYoutube/>} link={'https://www.youtube.com'}  />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MeetTheHostCardLeft