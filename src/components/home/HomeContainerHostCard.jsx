import React from 'react';
import hostFacebookIcon from '../assets/host-facebook.svg';
import hostTwitterIcon from '../assets/host-twitter.svg';
import hostPinterestIcon from '../assets/host-pinterest.svg';
import hostInstagramIcon from '../assets/host-instagram.svg';

function HomeContainerHostCard({bannerImage, bannerTitle, bannerType}) {
    return (
        <div >
            <div className='bg-transparent h-max w-max pb-6 mr-[55px]'>
                <img src={bannerImage} height='108' width='119' alt="" className='rounded-full' />
                <div className='flex flex-col items-center'>
                <p className='text-#FFFFFF text-sm'>{bannerTitle}</p>
                <p className='text-#666666 text-xs'>{bannerType}</p>
                </div>
                <div className='flex justify-around'>
                    {/* twitter button */}
                    <img src={hostTwitterIcon} height='18'width='18' alt="" />
                    {/* facebook button */}
                    <img src={hostFacebookIcon} height='18'width='18' alt="" />
                    {/* pinterest button */}
                    <img src={hostPinterestIcon} height='18'width='18' alt="" />
                    {/* instagram button */}
                    <img src={hostInstagramIcon} height='18'width='18' alt="" />
                </div>
            </div>
        </div>
    );
}

export default HomeContainerHostCard;
