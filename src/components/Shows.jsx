import React from 'react';
import recentlyupdated from '../data/RecentlyUpdated';
import ShowsAlphabeticalColumnList from './shows/ShowsAlphabeticalColumnList';
import ShowsRecentlyUpdatedContainer from './shows/ShowsRecentlyUpdatedContainer';

function Shows() {
  return (
    <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
        {/* navigation button */}
        {/* search bar */}
        <div className='flex flex-col pl-[26px] pt-[41px] md:pl-[61px] md:pt-[71px]'>
            {/* category title here */}
            <p className='text-#FFFFFF text-[21px] md:text-[18px] mb-[41px] md:mb-[27px]'>Recently Updated</p>
            {/* recently updated here */}
            <div className='flex w-screen md:w-9/12 auto-cols-max md:auto-cols-min mt-[10px] overflow-x-auto'>
                {/* testing purpose */}
                {recentlyupdated.map((item)=>(
                    <ShowsRecentlyUpdatedContainer key={item.id} showsCover={item.showsCover} showsTitle={item.showsTitle} showsDate={item.showsDate}/>
                ))}
            </div>
            {/* vertical list here */}
            <ShowsAlphabeticalColumnList letter='A'/>
        </div>
    </div>
);
}

export default Shows;
