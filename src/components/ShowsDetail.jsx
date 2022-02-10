import React from 'react'
import showsDetailList from '../data/ShowsDetailsList';
import showsSampleBanner from './assets/shows-sample-banner.png';
import ShowsDetailContainer from './shows/ShowsDetailContainer';

function ShowsDetail() {

    const showsTitle = "Battle of the Blues - Royal Thomian Cricket Encounter";
    const noOfEpisodes = "14  EPISODES";
    const showsDescription = "142nd 'Battle of the Blues': Your audio podcast - Enjoy listening to 14 brief clips captured during the match."


    return (
        <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            {/* main container */}
            <div className='flex-col mt-[126px] ml-[59px] space-y-[136px]'>
                {/* top container */}
                <div className="flex space-x-[210px]">
                    {/* text div col */}
                    <div className="flex-col max-w-[453px] justify-start space-y-[10px]">
                        <h1 className='text-#FFFFFF text-26px'>{showsTitle}</h1>
                        <p className='text-[#FFFFFF] text-[10px]'>{noOfEpisodes}</p>
                        <p className='text-[#666666] text-[12px]'>{showsDescription}</p>
                    </div>
                    {/* shows banner image */}
                        <img src={showsSampleBanner} alt="" className='h-[244px] w-[268px] object-fill'/>
                </div>
                {/* bottom shows grid */}
                <div className='w-[990px] grid grid-cols-6 gap-[43px]'>
                    {showsDetailList.map((item)=>(
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