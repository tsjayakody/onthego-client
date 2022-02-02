import React from 'react';
import aboutSampleImage from './assets/mobile-about-sample.png';
import aboutReviewSample from './assets/mobile-about-review-sample.png';
import AboutReview from './about/AboutReview';


function About() {
  const sampleReview = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  const sampleAboutText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";
  return (
    <div className='bg-#110E1F flex-col flex-grow h-full w-full'>
      <div className='flex h-[464px] justify-center md:flex-col md:pl-[300px]'>
        <img src={aboutSampleImage} alt="AboutImage" className='object-fill relative md:w-[432px]' />
        <p className='text-#FFFFFF text-[17px] absolute top-[98px] text-center h-[286px] w-[282px]'>{sampleAboutText}</p>
      </div>
      <div className='flex w-full overflow-x-auto md:pl-[190px]'>
        <AboutReview userImage={aboutReviewSample} userName={'Client One'} userRole={'Podcaster'} userReview={sampleReview} />
        <AboutReview userImage={aboutReviewSample} userName={'Client One'} userRole={'Podcaster'} userReview={sampleReview} />
        <AboutReview userImage={aboutReviewSample} userName={'Client One'} userRole={'Podcaster'} userReview={sampleReview} />
      </div>
    </div>
  );
}

export default About;
