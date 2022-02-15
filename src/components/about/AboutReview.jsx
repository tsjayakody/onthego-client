import React from 'react';
import PropTypes from 'prop-types';
import sampleImage from '../assets/mobile-about-review-sample.png';


function AboutReview({ userImage, userName, userRole, userReview }) {
  return (
    <div className='mr-[32px] md:mr-[77px]'>
      <div className='bg-#282246 h-[186px] w-[173px] md:w-[310px] md:h-[186px] flex-col'>
        <p className='text-left text-[14px] text-#FFFFFF pt-[20px] pl-[12px] pr-[21px]'>
          {userReview}
        </p>
        <div className='flex pl-[13px] pr-[12px] pt-[12px] items-center justify-start'>
          <img src={userImage} alt="" className='h-[50px] w-[39px] rounded-t-3xl rounded-b-3xl object-fill' />
          <div className='pl-[13px] flex-col'>
            <h6 className='text-#FFFFFF italic text-[14px]'>{userName}</h6>
            <p className='text-#FFFFFF text-[10px]'>{userRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutReview.defaultProps = {
  userImage: sampleImage,
  userName: '_',
  userRole: '_',
  userReview: '_',
}

AboutReview.propTypes = {
  userImage: PropTypes.any,
  userName: PropTypes.string,
  userRole: PropTypes.string,
  userReview: PropTypes.string,
}

export default AboutReview;
