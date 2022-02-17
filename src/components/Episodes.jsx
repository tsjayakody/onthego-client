import React from 'react';
import EpisodeCategoryContainer from './episodes/EpisodeCategoryContainer';
import episodes from '../data/Episodes';
import Topbar from './shared/Topbar';

function Episodes() {
    return (
        <div className='bg-#110E1F flex-grow h-full w-full overflow-y-auto md:pl-[203px] pb-[150px]'>
            <Topbar/>
            <div className='flex flex-col ml-[61px] mt-[71px]'>
                {/* category title here */}
                <p className='text-#FFFFFF text-18px mb-[15px]'>Categories</p>
                {/* grid here */}
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-[28px] md:mt-[15px] mt-[30px] mr-[20px]'>
                    {episodes.map((episode) => (
                        <EpisodeCategoryContainer 
                            key={episode.id} 
                            episodeNumber={episode.episodeList} 
                            episodeCover={episode.episodeCover} 
                            episodeCategory={episode.episodeCategory} 
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Episodes;
