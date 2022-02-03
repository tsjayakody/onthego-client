import React from 'react';
import episodeslist from '../data/EpisodesList';
import EpisodesListItem from './episodes/EpisodesListItem';

function EpisodesList() {
  return (
    <div className='bg-#110E1F flex-col h-full w-full overflow-y-auto pt-[117px] pl-[26px] pr:[31px] md:pl-[256px] md:pt-[164px]'>
        {/* title */}
        <h1 className='mx-auto text-#FFFFFF text-[21px] font-semibold pb-[29px]'>Sports</h1>
        {/* episode list -- column scrolling*/}
        <div className='pr-[31px] flex-col space-y-[23px]'>
        {episodeslist.map((item)=>(
          <EpisodesListItem key={item.id} episodeCover={item.episodeCover} episodeCategory={item.epsiodeCategory} episodeTitle={item.episodeTitle} episodeDate={item.episodeDate} noofepisodes={item.noofepisodes}/>
        ))}
        </div>
    </div>
  );
}

export default EpisodesList;
