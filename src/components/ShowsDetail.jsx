import React from 'react'
import showsDetailList from '../data/ShowsDetailsList';
import showsSampleBanner from './assets/shows-sample-banner.png';
import ShowsDetailContainer from './shows/ShowsDetailContainer';
import ShowsDetailLeftContainer from './shows/ShowsDetailLeftContainer';
import ShowsDetailRightContainer from './shows/ShowsDetailRightContainer';

function ShowsDetail() {

    const showsTitle = "Battle of the Blues - Royal Thomian Cricket Encounter";
    const noOfEpisodes = "14  EPISODES";
    const showsDescription = "142nd 'Battle of the Blues': Your audio podcast - Enjoy listening to 14 brief clips captured during the match."


    return (
        <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            <div className='flex-col mt-[126px] ml-[59px] space-y-[52px] md:space-y-[136px]'>
                <div className="flex ">
                    <div className='hidden md:inline-flex'>
                        <ShowsDetailLeftContainer
                            showsTitle={showsTitle}
                            noOfEpisodes={noOfEpisodes}
                            showsDescription={showsDescription}
                        />
                        <ShowsDetailRightContainer
                            showsSampleBanner={showsSampleBanner}
                        />
                    </div>
                    <div className='inline-table md:hidden'>
                        <ShowsDetailRightContainer
                            showsSampleBanner={showsSampleBanner}
                        />
                        <ShowsDetailLeftContainer
                            showsTitle={showsTitle}
                            noOfEpisodes={noOfEpisodes}
                            showsDescription={showsDescription}
                        />
                    </div>
                </div>
                <div className='md:w-[990px] md:grid md:grid-cols-6 md:gap-[43px] grid grid-cols-2 gap-[20px] mr-[44px] md:mr-[0px]'>
                    {showsDetailList.map((item) => (
                        <ShowsDetailContainer
                            key={item.id}
                            showsBanner={item.showCover}
                            showsTitle={item.showsTitle}
                            showsAuthor={item.showAuthor}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShowsDetail