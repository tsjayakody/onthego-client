import React from 'react';
import Topbar from './shared/Topbar';
import ShowsRecentlyUpdatedBottomContainer from './shows/ShowsRecentlyUpdatedBottomContainer';
import ShowsRecentlyUpdatedTopContainer from './shows/ShowsRecentlyUpdatedTopContainer';

function Shows() {
    return (
        <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            <Topbar/>
            <div className='flex flex-col pl-[26px] pt-[41px] md:pl-[61px] md:pt-[71px'>
                <ShowsRecentlyUpdatedTopContainer />
                <ShowsRecentlyUpdatedBottomContainer />
            </div>
        </div>
    );
}

export default Shows;
