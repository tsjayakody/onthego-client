import React from 'react';
import sampleImage from '../components/assets/common-sample-image.png';
import personSample from '../components/assets/person-sample.png';
import EpisodeDetailRelatedProductsList from './episodes/EpisodeDetailRelatedProductsList';
import EpisodeDetailUserProfileContainer from './episodes/EpisodeDetailUserProfileContainer';
import EpisodeDetailFeaturingContainer from './episodes/EpisodeDetailFeaturingContainer';
import EpisodeDetailRightContainer from './episodes/EpisodeDetailRightContainer';
import EpisodeDetailLeftContainer from './episodes/EpisodeDetailLeftContainer';
import EpisodeDetailDescriptionContainer from './episodes/EpisodeDetailDescriptionContainer';
import BackgroundContainer from './shared/BackgroundContainer';
import Topbar from './shared/Topbar';

function EpisodeDetailScreen() {

  return (
    <BackgroundContainer>
      <div className='flex flex-col h-screen'>
        <div className='py-1'>
          <Topbar />
        </div>
        <div className='flex-1 overflow-y-auto'>
          <div className='mt-[90px] md:ml-[61px] ml-[26px]'>
            {/* desktop-view */}
            <div className='hidden md:hidden lg:inline-flex'>
              <EpisodeDetailLeftContainer
                episodeCategory={"SPORTS - BATTLE OF THE BLUES - ROYAL THOMIAN CRICKET ENCOUNTER"}
                episodeTitle={"142nd “Battle of the Blues” Ends In A Watery Draw"}
                episodeDate={"OCTOBER 18,2021"}
                noOfEpisodes={"EPISODE 70"}
              />
              <EpisodeDetailRightContainer sampleImage={sampleImage} />
            </div>
            {/* mobile-view */}
            <div className='inline-table md:inline-table lg:hidden'>
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
        </div>
      </div>
    </BackgroundContainer>
  );
}

export default EpisodeDetailScreen;