import React from 'react'

function ShowsDetailRightContainer({
  showsSampleBanner
}) {
  return (
    <img
      src={showsSampleBanner}
      alt="ShowsSampleBanner"
      className='mx-auto h-[150px] w-[150px] md:h-[244px] md:w-[268px] object-fill'
    />
  )
}

export default ShowsDetailRightContainer