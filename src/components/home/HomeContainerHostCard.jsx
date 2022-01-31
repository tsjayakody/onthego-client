import React from 'react';
import hostFacebookIcon from '../assets/host-facebook.svg';
import hostTwitterIcon from '../assets/host-twitter.svg';
import hostPinterestIcon from '../assets/host-pinterest.svg';
import hostInstagramIcon from '../assets/host-instagram.svg';

function HomeContainerHostCard({bannerImage, bannerTitle, bannerType}) {
    return (
        <div >
            <div className='bg-transparent h-179 w-120 pb-6 pr-[55px]'>
                <img src={bannerImage} height='120' width='120' alt="" className='rounded-full' />
                <div className='flex flex-col items-center'>
                <p className='text-#FFFFFF text-[14px]'>{bannerTitle}</p>
                <p className='text-#666666 text-[10px]'>{bannerType}</p>
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
