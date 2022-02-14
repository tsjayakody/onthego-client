import React from 'react';
import sampleImage from '../components/assets/common-sample-image.png';
import personSample from '../components/assets/person-sample.png';
import EpisodeDetailRelatedProductsList from './episodes/EpisodeDetailRelatedProductsList';
import EpisodeDetailUserProfileContainer from './episodes/EpisodeDetailUserProfileContainer';
import EpisodeDetailFeaturingContainer from './episodes/EpisodeDetailFeaturingContainer';
import EpisodeDetailRightContainer from './episodes/EpisodeDetailRightContainer';
import EpisodeDetailLeftContainer from './episodes/EpisodeDetailLeftContainer';
import EpisodeDetailDescriptionContainer from './episodes/EpisodeDetailDescriptionContainer';

function EpisodeDetailScreen() {

  return (
    <div className='bg-#110E1F flex-col h-full w-full overflow-y-auto overflow-x-auto pt-[117px] pl-[26px] pr:[31px] pb-[100px] md:pl-[256px] md:pt-[164px]'>
      {/* desktop-view */}
      <div className='hidden md:inline-flex'>
        <EpisodeDetailLeftContainer
          episodeCategory={"SPORTS - BATTLE OF THE BLUES - ROYAL THOMIAN CRICKET ENCOUNTER"}
          episodeTitle={"142nd “Battle of the Blues” Ends In A Watery Draw"}
          episodeDate={"OCTOBER 18,2021"}
          noOfEpisodes={"EPISODE 70"}
        />
        <EpisodeDetailRightContainer sampleImage={sampleImage} />
      </div>
      {/* mobile-view */}
      <div className='inline-table md:hidden'>
        <EpisodeDetailRightContainer sampleImage={sampleImage} />
        <EpisodeDetailLeftContainer
          episodeCategory={"SPORTS - BATTLE OF THE BLUES - ROYAL THOMIAN CRICKET ENCOUNTER"}
          episodeTitle={"142nd “Battle of the Blues” Ends In A Watery Draw"}
          episodeDate={"OCTOBER 18,2021"}
          noOfEpisodes={"EPISODE 70"}
        />
      </div>
      <EpisodeDetailDescriptionContainer />
      <EpisodeDetailFeaturingContainer />
      <EpisodeDetailUserProfileContainer
        personSample={personSample}
      />
      <EpisodeDetailRelatedProductsList />
    </div>
  );
}

export default EpisodeDetailScreen;