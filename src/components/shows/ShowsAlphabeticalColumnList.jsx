import React from 'react';
import ShowsAlphabeticalBannerLetter from './ShowsAlphabeticalBannerLetter';
import ShowsCategoryBanner from './ShowsCategoryBanner';

function ShowsAlphabeticalColumnList({ letter, list }) {
    return (
            <div className='pb-[37px]'>
                <ShowsAlphabeticalBannerLetter letter={letter} />
                <div className='flex pt-[14px] w-full overflow-x-auto overflow-y-hidden'>
                    {list.map((item) => (
                        <ShowsCategoryBanner 
                            key={item.id} 
                            showCover={item.showCover} 
                            showName={item.showName} 
                            episodeList={item.episodeList} 
                        />
                    ))}
                </div>
            </div>
    );
}

export default ShowsAlphabeticalColumnList;
