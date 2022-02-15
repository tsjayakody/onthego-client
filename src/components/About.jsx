import React from 'react';
import AboutUsMainTopContainer from './about/AboutUsMainTopContainer';
import AboutUsReviewListContainer from './about/AboutUsReviewListContainer';


function About() {
  return (
    <div className='bg-#110E1F flex-col flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
      <div className='w-full h-full flex-col'>
        <div className='w-full h-1/2'>
          <AboutUsMainTopContainer/>
        </div>
        <div className='w-full h-1/2'>
          <AboutUsReviewListContainer/>
        </div>
      </div>
    </div>
  );
}

export default About;
