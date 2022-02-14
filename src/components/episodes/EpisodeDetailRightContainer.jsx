import React from 'react'

function EpisodeDetailRightContainer({sampleImage}) {
  return (
    <div>
       <img src={sampleImage} alt="" className='w-[150px] md:w-[268px] h-[150px] md:h-[244px] object-fill mx-auto md:mx-[0px]' />
    </div>
  )
}

export default EpisodeDetailRightContainer