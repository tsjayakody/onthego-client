import React from 'react';
import episodeslist from '../data/EpisodesList';
import EpisodesListItem from './episodes/EpisodesListItem';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';

function EpisodesList() {
  return (
    <BackgroundContainer>
      <Topbar />
      <div className='md:ml-[61px] ml-[26px] mt-[70px]'>
        <h1 className='mx-auto text-#FFFFFF text-[21px] font-semibold pb-[29px]'>Sports</h1>
        <div className='pr-[31px] flex-col md:h-[650px] space-y-[23px] overflow-y-auto overflow-x-auto'>
          {episodeslist.map((item) => (
            <EpisodesListItem
              key={item.id}
              index={item.id}
              episodeCover={item.episodeCover}
              episodeCategory={item.epsiodeCategory}
              episodeTitle={item.episodeTitle}
              episodeDate={item.episodeDate}
              noofepisodes={item.noofepisodes}
            />
          ))}
        </div>
      </div>
    </BackgroundContainer>
  );
}

export default EpisodesList;
