import React from 'react';
import ShowsAlphabeticalBannerLetter from './ShowsAlphabeticalBannerLetter';
import ShowsCategoryBanner from './ShowsCategoryBanner';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import HomeContainerBlueEpisodeContainer from '../home/HomeContainerBlueEpisodeContainer';

function ShowsAlphabeticalColumnList({
    letter,
    list
}) {
    return (
        <div className='pb-[37px]'>
            <ShowsAlphabeticalBannerLetter letter={letter} />
            <div className='flex pt-[14px] w-full overflow-x-auto overflow-y-hidden'>
                {list.slice(0, 6).map((item, index) => (
                    (index < 5) ? <ShowsCategoryBanner
                        key={item.id}
                        showCover={item.showCover}
                        showName={item.showName}
                        episodeList={item.episodeList}
                    /> :
                        <Link to={'/shows/showslist'}>
                            <HomeContainerBlueEpisodeContainer />
                        </Link>
                ))}
            </div>
        </div>
    );
}

ShowsAlphabeticalColumnList.defaultProps = {
    letter: '',
    list: [],
}

ShowsAlphabeticalColumnList.propTypes = {
    letter: PropTypes.string,
    list: PropTypes.array,
}

export default ShowsAlphabeticalColumnList;
