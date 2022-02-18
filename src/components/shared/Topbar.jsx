import React from 'react'
import TopNavigationButton from './TopNavigationButton'
import TopNavigationSearchBar from './TopNavigationSearchBar'

function Topbar() {
  return (
    <div className='bg-transparent ml-[61px] mt-[28px]'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <TopNavigationButton />
        </div>
        <TopNavigationSearchBar />
      </div>
    </div>
  )
}

export default Topbar