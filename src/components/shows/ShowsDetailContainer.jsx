import React from 'react'

function ShowsDetailContainer({
  showsBanner,
  showsTitle,
  showsAuthor
}) {
  return (
    <div className='max-h-max max-w-[138px] md:max-w-[119px] bg-transparent md:bg-[#282246] flex-col'>
      <img src={showsBanner} alt="" className='h-[138px] w-[138px] md:h-[108px] md:w-[119px] object-fill' />
      <p className='text-#FFFFFF mx-[10px] mt-[4px] text-[12px] md:text-[10px]'>
        {showsTitle}
      </p>
      <p className='text-[#B3B3B3] md:text-[#666666] text-[11px] md:text-[10px] mt-[2px] mx-[10px] mb-[9px]'>
        {showsAuthor}
      </p>
    </div>
  )
}

export default ShowsDetailContainer