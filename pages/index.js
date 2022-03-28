import React from 'react';
import Link from 'next/link';

import ImageSlider from '../components/shared/ImageSlider'


import LatestEpisodeHorizontalScrollContainer from '../components/shared/LatestEpisodeHorizontalScrollContainer'
import FeaturedEpisodeHorizontalScrollContainer from '../components/shared/FeaturedEpisodeHorizontalScrollContainer'
import PopularEpisodeVerticalScrollContainer from '../components/shared/PopularEpisodeVerticalScrollContainer'
import MeetTheHostHorizontalScrollContainer from '../components/shared/MeetTheHostHorizontalScrollContainer'


export default function Home() {
  
  return (
    <div className="flex h-screen justify-center items-center mx-[15px] lg:mx-[60px]">
      {/* center */}
      <div className="flex-grow w-full overflow-y-scroll scrollbar-hide h-screen">
        {/* image slider */}
        <div className='mt-[25px] mx-auto mb-[30px] max-w-[1200px] h-[300px] flex-shrink'>
          <ImageSlider textVisible={true}/>
        </div>

        {/* latest episode */}
        <div className='mx-auto mb-[30px] max-w-[1200px] h-[300px]'>
          <h1 className='text-white font-semibold text-[18px] text-left'>Latest Episodes</h1>
          <LatestEpisodeHorizontalScrollContainer/>

        </div>

        {/* featured episode */}
        <div className='mx-auto mb-[30px] max-w-[1200px] h-[300px]'>
          <h1 className='text-white font-semibold text-[18px] text-left'>Featured Episodes</h1>
          <FeaturedEpisodeHorizontalScrollContainer/>
        </div>

        {/* meet the hosts */}
        <div className='mx-auto mb-[30px] max-w-[1200px] h-[300px]'>
          <h1 className='text-white font-semibold text-[18px] text-left'>Meet The Hosts</h1>
          <MeetTheHostHorizontalScrollContainer/>
        </div>

        {/* spacer */}
        <div className='h-[150px]'></div>

      </div>

      {/* sticky right-cpontainer */}
      <div className="hidden md:hidden lg:inline scroll-container h-full w-[335px] overflow-y-scroll scrollbar-hide flex-shrink-0">
        <h1 className="text-white text-[17px] font-semibold text-center mt-[38px] mb-[18px]">Popular Episodes</h1>
        {/* list */}
        <PopularEpisodeVerticalScrollContainer/>
        {/* view all button */}
        <Link href={'/episodes/popularepisodes'}>
          <div className='h-[25px] w-[260px] bg-[#282246] text-white hover:text-[#00D2CB] ml-[53px] cursor-pointer flex justify-center'>
            <p className='text-center text-[10px] m-auto'>View All</p>
          </div>
        </Link>
        <div className='h-[180px]'></div>
      </div>
    </div>
  );
}