import React from 'react';
import hostFacebookIcon from '../assets/host-facebook.svg';
import hostTwitterIcon from '../assets/host-twitter.svg';
import hostPinterestIcon from '../assets/host-pinterest.svg';
import hostInstagramIcon from '../assets/host-instagram.svg';

function HomeContainerHostCard({bannerImage, bannerTitle, bannerType}) {
    return (
        <div >
            <div className='bg-transparent pb-6 h-179 w-120 md:h-166 md:w-120'>
                <img src={bannerImage} alt="" className='object-cover rounded-full h-120 w-120' />
                <div className='flex flex-col items-center'>
                <p className='text-#FFFFFF text-[14px] truncate'>{bannerTitle}</p>
                <p className='text-#666666 text-[10px] truncate'>{bannerType}</p>
                </div>
                <div className='flex justify-around'>
                    {/* twitter button */}
                    <img src={hostTwitterIcon} height='10'width='13' alt="" />
                    {/* facebook button */}
                    <img src={hostFacebookIcon} height='10'width='13' alt="" />
                    {/* pinterest button */}
                    <img src={hostPinterestIcon} height='10'width='13' alt="" />
                    {/* instagram button */}
                    <img src={hostInstagramIcon} height='10'width='13' alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeContainerHostCard;
