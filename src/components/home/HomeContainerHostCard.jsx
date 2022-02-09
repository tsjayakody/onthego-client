import React from 'react';
import hostFacebookIcon from '../assets/host-facebook.svg';
import hostTwitterIcon from '../assets/host-twitter.svg';
import hostPinterestIcon from '../assets/host-pinterest.svg';
import hostInstagramIcon from '../assets/host-instagram.svg';

function HomeContainerHostCard({bannerImage, bannerTitle, bannerType}) {
    return (
        <div >
            <div className='bg-transparent md:h-179 md:w-120 h-166 w-120'>
                {/* needds to implement circular background here */}
                <img src={bannerImage} alt="" className='rounded-full border border-gray-100 shadow-sm'/>
                <div className='flex flex-col items-center'>
                <p className='text-#FFFFFF text-[13px] md:text-[13px] truncate'>{bannerTitle}</p>
                <p className='text-#666666 text-[10px] truncate'>{bannerType}</p>
                </div>
                <div className='flex justify-around'>
                    
                    {/* twitter button */}
                    <a href={"https://www.twitter.com"} target="_blank" rel="noopener noreferrer">
                        <img src={hostTwitterIcon} height='10'width='13' alt="" />
                    </a>

                    {/* facebook button */}
                    <a href={"https://www.twitter.com"} target="_blank" rel="noopener noreferrer">
                        <img src={hostFacebookIcon} height='10'width='13' alt="" />
                    </a>
                    
                    {/* pinterest button */}
                    <a href={"https://www.twitter.com"} target="_blank" rel="noopener noreferrer">
                        <img src={hostPinterestIcon} height='10'width='13' alt="" />
                    </a>
                    
                    {/* instagram button */}
                    <a href={"https://www.twitter.com"} target="_blank" rel="noopener noreferrer">
                        <img src={hostInstagramIcon} height='10'width='13' alt="" />
                    </a>
                    
                </div>
            </div>
        </div>
    );
}

export default HomeContainerHostCard;
