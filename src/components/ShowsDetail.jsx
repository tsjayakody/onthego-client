import React from 'react'
import showsDetailList from '../data/ShowsDetailsList';
import showsSampleBanner from './assets/shows-sample-banner.png';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';
import ShowsDetailContainer from './shows/ShowsDetailContainer';
import ShowsDetailLeftContainer from './shows/ShowsDetailLeftContainer';
import ShowsDetailRightContainer from './shows/ShowsDetailRightContainer';

function ShowsDetail() {

    const showsTitle = "Battle of the Blues - Royal Thomian Cricket Encounter";
    const noOfEpisodes = "14  EPISODES";
    const showsDescription = "142nd 'Battle of the Blues': Your audio podcast - Enjoy listening to 14 brief clips captured during the match."


    return (
        <BackgroundContainer>
            <div className='flex flex-col h-screen'>
                <div className='py-1'>
                    <Topbar />
                </div>
                <div className='flex-1 overflow-y-auto'>
                    <div className='flex-col mt-[76px] ml-[59px] space-y-[52px] md:space-y-[85px] lg:space-y-[136px]'>
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
                        <div className='lg:w-[990px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 md:gap-[25px] lg:gap-[43px] gap-[20px] mr-[44px] md:mr-[0px] '>
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
            </div>
        </BackgroundContainer>
    )
}

export default ShowsDetail