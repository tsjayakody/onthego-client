import React from 'react';
import categoryBannerSample from '../assets/episode-banner-sample-3.svg';

function ShowsCategoryBanner() {
    return (
        <div className='bg-transparent h-[11.188rem] w-[9.375rem] mr-[38px]'>
          {/* number stac here */}
  
          {/* image/banner here */}
          <img src={categoryBannerSample} alt="" height='150' width='150'/>
          {/* category yte here */}
          <div className='bg-#282246 flex justify-center items-center h-[2.5rem] w-[9.375rem]'>
              <p className='text-#FFFFFF text-14px'>Sports</p>
          </div>
        </div>
    );
}

export default ShowsCategoryBanner;
