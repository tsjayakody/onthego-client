import React from 'react';
import AboutReview from './about/AboutReview';
import reviewList from '../data/Reviews';
import AboutUsTopContainerMobile from './about/AboutUsTopContainerMobile';
import AboutUsTopContainerDesktop from './about/AboutUsTopContainerDesktop';


function About() {
  return (
    <div className='bg-#110E1F flex-col flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
      {/* mobile view */}
      <div className='inline md:hidden w-full'>
        <AboutUsTopContainerMobile/>
      </div>
      {/* desktop view */}
      <div className='hidden md:inline-table mx-auto'>
        <AboutUsTopContainerDesktop/>
      </div>
      <div className='flex w-full overflow-x-auto md:pl-[190px] pr-[32px]'>
        {reviewList.map((item)=>(
          <AboutReview 
            key={item.key} 
            userImage={item.userImage} 
            userName={item.userName} 
            userRole={item.userType} 
            userReview={item.userReview} 
          />
        ))}
      </div>
    </div>
  );
}

export default About;
