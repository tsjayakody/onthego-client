import React from 'react';
import hostFacebookIcon from '../assets/host-facebook.svg';
import hostTwitterIcon from '../assets/host-twitter.svg';
import hostPinterestIcon from '../assets/host-pinterest.svg';
import hostInstagramIcon from '../assets/host-instagram.svg';
import HostSocialButton from './HostSocialButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HomeContainerHostCard({
    bannerImage,
    bannerTitle,
    bannerType
}) {
    return (

        <div className='bg-transparent md:h-179 md:w-120 h-166 w-120'>
            <Link to="/hostdetail">
                <div>
                    {/* needds to implement circular background here */}
                    <img src={bannerImage} alt="" className='rounded-full border border-gray-100 shadow-sm' />
                    <div className='flex flex-col items-center'>
                        <p className='text-#FFFFFF text-[13px] md:text-[13px] truncate'>{bannerTitle}</p>
                        <p className='text-#666666 text-[10px] truncate'>{bannerType}</p>
                    </div>
                </div>
            </Link>
            <div className='flex justify-around'>
                {hostSocialMediaButtonLinkArray.map(({icon, link})=>(
                    <HostSocialButton key={link} icon={icon} link={link}/>
                ))}
            </div>
        </div>

    );
}

const hostSocialMediaButtonLinkArray = [
    {
        icon: hostTwitterIcon,
        link: "https://www.twitter.com",
    },
    {
        icon: hostFacebookIcon,
        link: "https://www.facebook.com",
    },
    {
        icon: hostPinterestIcon,
        link: "https://www.pinterest.com",
    },
    {
        icon: hostInstagramIcon,
        link: "https://www.instagram.com"
    }
]

HomeContainerHostCard.propTypes = {
    bannerImage: PropTypes.string,
    bannerTitle: PropTypes.string,
    bannerType: PropTypes.string,
}

export default HomeContainerHostCard;
