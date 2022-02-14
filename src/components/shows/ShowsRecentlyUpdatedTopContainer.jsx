import React from 'react'
import recentlyupdated from '../../data/RecentlyUpdated'
import ShowsRecentlyUpdatedContainer from './ShowsRecentlyUpdatedContainer'

function ShowsRecentlyUpdatedTopContainer() {
  return (
    <div>
        {/* category title here */}
        <p className='text-#FFFFFF text-[21px] md:text-[18px] mb-[41px] md:mb-[27px]'>Recently Updated</p>
            {/* recently updated here */}
            <div className='flex w-screen auto-cols-max md:auto-cols-min mt-[10px] overflow-x-auto'>
                {/* testing purpose */}
                {recentlyupdated.map((item)=>(
                    <ShowsRecentlyUpdatedContainer key={item.id} showsCover={item.showsCover} showsTitle={item.showsTitle} showsDate={item.showsDate}/>
                ))}
            </div>
    </div>
  )
}

export default ShowsRecentlyUpdatedTopContainer