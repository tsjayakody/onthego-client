import React from 'react';
import TopNavigationButton from './TopNavigationButton';
import TopNavigationSearchBar from './TopNavigationSearchBar';
import SearchData from '../../data/SearchData.json';

function Topbar() {
  return (
    <div className='bg-transparent ml-[61px] mt-[28px]'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <TopNavigationButton/>
        </div>
        <TopNavigationSearchBar data={SearchData} />
      </div>
    </div>
  )
}

export default Topbar