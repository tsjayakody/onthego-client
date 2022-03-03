import React from 'react';
import AboutUsMainTopContainer from './about/AboutUsMainTopContainer';
import AboutUsReviewListContainer from './about/AboutUsReviewListContainer';
import Topbar from './shared/Topbar';


function About() {
  return (
    <div className='bg-#110E1F flex-col flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
      <div className='flex flex-col h-screen'>
        <div className='py-1'>
          <Topbar />
        </div>
        <div className='flex-1 overflow-y-auto'>
          <div className='w-full h-full flex-col md:mt-[116px] space-y-[118px]'>
            <div className='w-full h-1/2'>
              <AboutUsMainTopContainer />
            </div>
            <div className='w-full h-1/2'>
              <AboutUsReviewListContainer />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default About;
