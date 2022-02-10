import React from 'react'

function ShowsDetailContainer({showsBanner, showsTitle, showsAuthor}) {
  return (
    <div className='max-h-max max-w-[119px] bg-[#282246] flex-col'>
        <img src={showsBanner} alt="" className='h-[108px] w-[119px] object-fill'/>
        <p className='text-#FFFFFF mx-[10px] mt-[4px] text-[10px]'>{showsTitle}</p>
        <p className='text-[#666666] text-[10px] mt-[2px] mx-[10px] mb-[9px]'>{showsAuthor}</p>
    </div>
  )
}

export default ShowsDetailContainer