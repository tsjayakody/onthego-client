import React from 'react';

function AboutReview({userImage, userName, userRole, userReview}) {
  return (
    <div className='pt-[66px] pl-[32px] flex-col'>
    <div className='bg-#282246 h-[186px] w-[173px] flex-col'>
      <p className='text-left text-[14px] text-#FFFFFF pt-[20px] pl-[12px] pr-[21px]'>
      {userReview}
      </p>
      <div className='flex pl-[13px] pr-[12px] pt-[12px] items-center justify-start'>
        <img src={userImage} alt="" className='h-[50px] w-[39px] rounded-t-3xl rounded-b-3xl object-fill'/>
        <div className='pl-[13px] flex-col'>
          <h6 className='text-#FFFFFF italic text-[14px]'>{userName}</h6>
          <p className='text-#FFFFFF text-[10px]'>{userRole}</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AboutReview;
